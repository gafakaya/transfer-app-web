import {
  BanknotesIcon,
  BeakerIcon,
  ExclamationCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { NextPage } from "next";
import React from "react";
import OwnUpToDateReservations from "../components/profile/reservations/OwnUpToDateReservations";
import LocDateStep from "../components/reservation/create/LocDateStep";
import SelectVehicleStep from "../components/reservation/create/SelectVehicleStep";
import ReservationList from "../components/reservation/ReservationList";
import { Button, IconButton, NavButton } from "../components/tags/buttons";
import VehicleElement from "../components/vehicle/VehicleElement";
import VehicleList from "../components/vehicle/VehicleList";

type Props = {};

const Test: NextPage = (props: Props) => {
  const handleSelectVehicle = () => {
    alert("AS");
  };

  return (
    <div className={`flex items-center gap-2`}>
      <OwnUpToDateReservations />
    </div>
  );
};

export default Test;
