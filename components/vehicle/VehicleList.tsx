import React from "react";
import { useAppDispatch, useAppSelector } from "../../src/hooks/reduxHooks";
import useAPICall from "../../src/hooks/useAPICall";
import {
  setVehicles,
  selectVehicles,
} from "../../src/redux/slices/vehicleSlice";
import getVehicles from "../../src/services/vehicles/get-vehicles";
import VehicleElement from "./VehicleElement";

type VehicleListProps = {
  handleSelectVehicle?: any;
  price?: number;
};

const VehicleList = ({ handleSelectVehicle, price }: VehicleListProps) => {
  const dispatch = useAppDispatch();
  useAPICall({
    setState: setVehicles,
    apiFunc: getVehicles,
    select: selectVehicles,
  });
  const vehicles = useAppSelector(selectVehicles);

  return (
    <div className="flex flex-col w-full">
      {/* VEHICLES */}
      {vehicles &&
        vehicles.map((vehicle) => {
          return (
            <div
              key={vehicle.id}
              className={`flex flex-col gap-2 bg-skin-secondary my-1 p-1.5 rounded-md hover:bg-opacity-80`}
            >
              <VehicleElement
                vehicle={vehicle}
                handleSelectVehicle={handleSelectVehicle}
                price={price}
              />
            </div>
          );
        })}
    </div>
  );
};

export default VehicleList;
