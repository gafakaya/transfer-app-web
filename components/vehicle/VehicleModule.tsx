import React from "react";
import { useAppDispatch, useAppSelector } from "../../src/hooks/reduxHooks";
import useAPICall from "../../src/hooks/useAPICall";
import {
  setVehicles,
  selectVehicles,
} from "../../src/redux/slices/vehicleSlice";
import getVehicles from "../../src/services/vehicles/get-vehicles";

type Props = {};

const VehicleModule = (props: Props) => {

  return <div>VehicleModule</div>;
};

export default VehicleModule;
