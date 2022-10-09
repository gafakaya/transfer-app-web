import { useLoadScript } from "@react-google-maps/api";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import {
  selectOrigin,
  selectDestination,
  setTimestamp,
  setReturnTimestamp,
  setDirections,
  setOrigin,
  setDestination,
  selectTimestamp,
  setTotalPrice,
  selectTotalPrice,
  selectDirections,
} from "../../../src/redux/slices/navSlice";
import {
  selectSelectedVehicle,
  setSelectedVehicle,
} from "../../../src/redux/slices/vehicleSlice";
import updateReservation from "../../../src/services/reservations/update-reservation";
import { Places } from "../../places";
import { Button, H2, H1 } from "../../tags";
import { UpdateType } from "./OwnReservations";

type UpdateReservationProps = {
  update: UpdateType;
  setUpdate: React.Dispatch<React.SetStateAction<UpdateType>>;
};

const UpdateReservation = ({ update, setUpdate }: UpdateReservationProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const router = useRouter();

  const dispatch = useAppDispatch();
  const origin = useAppSelector(selectOrigin);
  const destination = useAppSelector(selectDestination);
  const directions = useAppSelector(selectDirections);
  const timestamp = useAppSelector(selectTimestamp);
  const vehicle = useAppSelector(selectSelectedVehicle);
  const totalPrice = useAppSelector(selectTotalPrice);

  useEffect(() => {
    if (
      update.updateReservation?.originLat &&
      update.updateReservation.originLng &&
      update.updateReservation?.destinationLat &&
      update.updateReservation.destinationLng &&
      update.updateReservation.vehicle &&
      update.updateReservation.departureDate &&
      update.updateReservation.totalPrice
    ) {
      dispatch(
        setOrigin({
          latLng: {
            lat: update.updateReservation?.originLat,
            lng: update.updateReservation?.originLng,
          },
          name: update.updateReservation.originName,
        })
      );
      dispatch(
        setDestination({
          latLng: {
            lat: update.updateReservation?.destinationLat,
            lng: update.updateReservation?.destinationLng,
          },
          name: update.updateReservation.destinationName,
        })
      );
      dispatch(setSelectedVehicle(update.updateReservation.vehicle));
      dispatch(setTimestamp(update.updateReservation.departureDate));
      dispatch(setTotalPrice(update.updateReservation.totalPrice));
    }
  }, [dispatch, update]);

  if (!isLoaded) return <div>Loading...</div>;

  const handleDate = (
    e: React.ChangeEvent<HTMLInputElement>,
    dateType: "departure" | "return"
  ) => {
    if (dateType == "departure") {
      const timestamp = new Date(e.target.value);
      dispatch(setTimestamp(timestamp));
    } else if (dateType == "return") {
      const timestamp = new Date(e.target.value);
      dispatch(setReturnTimestamp(timestamp));
    } else {
      console.log("Wrong date type");
    }
  };

  const fetchDirections = async () => {
    if (!origin) return;
    if (!destination) return;
    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: {
          lat: parseFloat(origin.latLng.lat.toString()),
          lng: parseFloat(origin.latLng.lng.toString()),
        },
        destination: {
          lat: parseFloat(destination.latLng.lat.toString()),
          lng: parseFloat(destination.latLng.lng.toString()),
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          dispatch(setDirections(result));
        }
      }
    );
  };

  const handleUpdate = async () => {
    if (!update.updateReservation?.id) return;
    const result = await updateReservation(update.updateReservation.id, {
      originLat: origin?.latLng.lat,
      originLng: origin?.latLng.lng,
      originName: origin?.name,
      destinationLat: destination?.latLng.lat,
      destinationLng: destination?.latLng.lng,
      destinationName: destination?.name,
      departureDate: timestamp,
      totalPrice: totalPrice,
      vehicleId: vehicle?.id,
      distanceText: directions?.routes[0].legs[0].distance?.text,
      distanceValue: directions?.routes[0].legs[0].distance?.value,
      durationText: directions?.routes[0].legs[0].duration?.text,
      durationValue: directions?.routes[0].legs[0].duration?.value,
    });
    console.log(result);
  };

  return (
    <div>
      <div className="flex flex-col w-full gap-3 mt-2">
        <div>
          <H2>Where can we pick you up?</H2>
          <Places locType="origin" />
        </div>
        <div>
          <H2>Where should we drop you off?</H2>
          <Places locType="destination" />
        </div>
        <div className="">
          <H2>Date?</H2>
          <input
            type={"datetime-local"}
            className="rounded bg-skin-secondary w-full mr-1 p-2.5 outline-none border-0 text-sm"
            onChange={(e) => handleDate(e, "departure")}
          />
        </div>
        <div className="flex gap-3 text-sm w-full ">
          <Button
            title="Set direction"
            type="button"
            onClick={() => {
              fetchDirections();
            }}
            className="py-[8px]"
          />
          <Button
            title="Cancel"
            type="button"
            onClick={() => {
              setUpdate({ isUpdating: false, updateReservation: null });
            }}
            defaultHover={false}
            className="py-[8px] border-2 border-skin-red bg-transparent text-skin-red hover:bg-skin-red hover:text-skin-primary"
          />
          {/* <div onClick={() => nextStep()}>
          <NavButton Icon={MagnifyingGlassIcon} text="Search Transfer" />
        </div> */}
        </div>
        <div className="flex gap-3 text-sm w-full ">
          <Button
            title="Update"
            type="button"
            onClick={() => {
              handleUpdate();
            }}
            defaultHover={false}
            className="py-[8px] border-2 border-skin-blue bg-transparent text-skin-blue hover:bg-skin-blue hover:text-skin-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateReservation;
