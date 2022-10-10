import {
  TruckIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { Vehicle } from "../../src/types/Vehicle";
import { Button } from "../tags";

type VehicleElementProps = {
  vehicle: Vehicle | null;
  handleSelectVehicle?: any;
};

const VehicleElement = ({
  vehicle,
  handleSelectVehicle,
}: VehicleElementProps) => {
  return (
    <div className="flex flex-col justify-between text-sm px-1">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-start gap-1.5 mb-1">
            <TruckIcon className="h-5" />
            <span className="">{vehicle?.vehicleName}</span>
          </div>
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
        <Image
          width={128}
          height={81}
          src={`http://localhost:3001/vehicles/image/${vehicle?.imageName}`}
          alt="car"
        />
      </div>
      {handleSelectVehicle && (
        <div className="flex items-center justify-between w-fit gap-2 py-2">
          <div className="flex gap-1.5 items-center bg-skin-green px-2.5 py-1 rounded-lg">
            <BanknotesIcon className="h-5" />
            <span className="">{vehicle?.basePrice}$</span>
          </div>
          <Button
            title="Select"
            type="button"
            onClick={() => {
              handleSelectVehicle(vehicle);
            }}
            className="border-2 border-skin-tertiary px-2.5 py-0.5"
          />
        </div>
      )}
    </div>
  );
};

export default VehicleElement;
