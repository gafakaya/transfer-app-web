import { useRouter } from "next/router";
import React from "react";
import { useAppSelector } from "../../../src/hooks/reduxHooks";
import {
  selectDestination,
  selectDirections,
  selectOrigin,
  selectReturnTimestamp,
  selectTimestamp,
  selectTotalPrice,
} from "../../../src/redux/slices/navSlice";
import { selectSelectedVehicle } from "../../../src/redux/slices/vehicleSlice";
import createReservation, {
  CreateReservationDataType,
} from "../../../src/services/reservations/create-reservation";
import { Button, H1 } from "../../tags";
import VehicleElement from "../../vehicle/VehicleElement";

type Props = {};

const CreateReservation = (props: Props) => {
  const router = useRouter();

  const origin = useAppSelector(selectOrigin);
  const destination = useAppSelector(selectDestination);
  const directions = useAppSelector(selectDirections);
  const timestamp = useAppSelector(selectTimestamp);
  const totalPrice = useAppSelector(selectTotalPrice);
  const vehicle = useAppSelector(selectSelectedVehicle);
  const returnTimestamp = useAppSelector(selectReturnTimestamp);

  const handleCreateReservation = async () => {
    if (
      origin &&
      destination &&
      timestamp &&
      vehicle &&
      directions &&
      directions.routes[0].legs[0].distance &&
      directions.routes[0].legs[0].duration &&
      totalPrice
    ) {
      const createReservationData: CreateReservationDataType = {
        originLng: origin.latLng.lng,
        originLat: origin.latLng.lat,
        originName: origin.name,
        destinationLng: destination.latLng.lng,
        destinationLat: destination.latLng.lat,
        destinationName: destination.name,
        departureDate: timestamp,
        distanceValue: directions.routes[0].legs[0].distance.value,
        distanceText: directions.routes[0].legs[0].distance.text,
        durationValue: directions.routes[0].legs[0].duration.value,
        durationText: directions.routes[0].legs[0].duration.text,
        vehicleId: vehicle.id,
        totalPrice: totalPrice,
      };

      await createReservation(createReservationData)
        .then((result: any) => {
          console.log(result);
        })
        .catch((err: any) => console.log(err));
    } else {
      router.push("/");
    }
  };

  return (
    <div className="max-w-md">
      <H1>Create Reservation</H1>
      <div>
        <div>{origin?.name}</div>
        <div>{destination?.name}</div>
        <VehicleElement vehicle={vehicle} />
      </div>
      <Button
        title="Create"
        type="button"
        className="w-full"
        onClick={() => handleCreateReservation()}
      />
    </div>
  );
};

export default CreateReservation;
