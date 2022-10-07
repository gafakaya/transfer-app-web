import {
  ShoppingBagIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { Vehicle } from "../../../src/types/Vehicle";
import { Button } from "../../tags";

type VehicleModuleProps = {
  vehicle: Vehicle | null;
  handleSelectVehicle?: any;
};

const VehicleModule = ({
  vehicle,
  handleSelectVehicle,
}: VehicleModuleProps) => {
  return (
    <div className="flex flex-col justify-between bg-skin-secondary rounded my-2">
      <div className="flex flex-col items-start gap-0.5 my-2 ml-4">
        {/* <TruckIcon className="h-5" /> */}
        <span className="font-semibold">{vehicle?.vehicleName}</span>
        {/* <span className="">{vehicle?.vehicleDescription}</span> */}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            width={150}
            height={80}
            src={`http://localhost:3001/vehicles/image/${vehicle?.imageName}`}
            alt="car"
          />
          <div>
            <div className="flex items-center gap-1">
              <ShoppingBagIcon className="h-4" />
              Max {vehicle?.capacity}
            </div>
            <div className="flex items-center gap-1">
              <UserGroupIcon className="h-4" />
              Max {vehicle?.capacity}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          +${vehicle?.basePrice}
          {handleSelectVehicle && (
            <div>
              <Button
                onClick={() => handleSelectVehicle(vehicle)}
                title="Select"
                type="button"
                className="border-2 border-skin-tertiary px-2.5 py-0.5"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleModule;
