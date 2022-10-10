import {
  BanknotesIcon,
  BeakerIcon,
  ExclamationCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { NextPage } from "next";
import React from "react";
import LocDateStep from "../components/reservation/create/LocDateStep";
import SelectVehicleStep from "../components/reservation/create/SelectVehicleStep";
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
      {/* <VehicleList handleSelectVehicle={handleSelectVehicle} /> */}
      <SelectVehicleStep />
    </div>
  );
};

export default Test;
