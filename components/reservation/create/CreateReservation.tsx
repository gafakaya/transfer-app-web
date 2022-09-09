import { useRouter } from "next/router";
import React from "react";
import { useAppSelector } from "../../../src/hooks/reduxHooks";
import {
  selectDestination,
  selectOrigin,
  selectReturnTimestamp,
  selectTimestamp,
} from "../../../src/redux/slices/navSlice";
import { selectSelectedVehicle } from "../../../src/redux/slices/vehicleSlice";
import creaateReservation, {
  CreateReservationDataType,
} from "../../../src/services/reservations/create-reservation";
import { Button, H1 } from "../../tags";
import VehicleModule from "../vehicle/VehicleModule";

type Props = {};

const CreateReservation = (props: Props) => {
  const router = useRouter();

  const origin = useAppSelector(selectOrigin);
  const destination = useAppSelector(selectDestination);
  const timestamp = useAppSelector(selectTimestamp);
  const returnTimestamp = useAppSelector(selectReturnTimestamp);
  const vehicle = useAppSelector(selectSelectedVehicle);

  const handleCreateReservation = async () => {
    if (origin && destination && timestamp && vehicle) {
      const createReservationData: CreateReservationDataType = {
        originLng: origin.latLng.lng,
        originLat: origin.latLng.lat,
        originName: origin.name,
        destinationLng: destination.latLng.lng,
        destinationLat: destination.latLng.lat,
        destinationName: destination.name,
        departureTimestamp: timestamp,
      };

      console.log(createReservationData);

      await creaateReservation(createReservationData)
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
        <VehicleModule vehicle={vehicle} />
      </div>
      <div onClick={() => handleCreateReservation()}>
        <Button title="Create" type="button" />
      </div>
    </div>
  );
};

export default CreateReservation;
