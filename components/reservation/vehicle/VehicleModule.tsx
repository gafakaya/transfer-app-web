import { ShoppingBagIcon, UserGroupIcon } from "@heroicons/react/outline";
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
    <div className="flex flex-row justify-between items-center bg-skin-secondary rounded my-2">
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
              className="text-sm"
              hover={"hover:text-white hover:bg-black"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleModule;
