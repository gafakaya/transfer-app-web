import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";
import { Pricing } from "../../../../src/types/Pricing";
import { H2 } from "../../../tags";
import { UpdateType } from "./Pricing";

type ActivePricingProps = {
  activePricing: Pricing | null;
  setUpdate: React.Dispatch<React.SetStateAction<UpdateType>>;
};

const ActivePricing = ({ activePricing, setUpdate }: ActivePricingProps) => {
  if (!activePricing || !activePricing.isActive)
    return <div>No active pricing found</div>;
  return (
    <div>
      <H2>Active Pricing</H2>
      <div className="flex flex-col w-1/2 p-2 bg-skin-secondary mb-2">
        <div>
          <span>Cost Gas Litre: </span>
          <span>{activePricing.costPerGasLitre}</span>
        </div>
        <div>
          <span>Litre Per Km: </span>
          <span>{activePricing.litrePerKm}</span>
        </div>
        <div>
          <span>Price Per Km: </span>
          <span>{activePricing.pricePerKm}</span>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <div
            className="hover:bg-black hover:text-white
          rounded-md p-0.5 duration-300 transition-all"
            onClick={() => {
              setUpdate({
                isUpdating: true,
                updatePricing: activePricing,
              });
            }}
          >
            <PencilIcon className="h-5" />
          </div>
          <div
            className="hover:bg-black hover:text-white
          rounded-md p-0.5 duration-300 transition-all"
          >
            <TrashIcon className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivePricing;
