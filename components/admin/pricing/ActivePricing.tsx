import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import deletePricing from "../../../src/services/pricing/delete-pricing";
import { Pricing } from "../../../src/types/Pricing";
import { H2 } from "../../tags";
import { IconButton } from "../../tags/buttons";
import { UpdateType } from "./PricingSettings";

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
      <div className="flex flex-col w-full p-2 bg-skin-secondary mb-2">
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
          <IconButton
            Icon={PencilIcon}
            iconClassName={`h-[20px]`}
            onClick={() => {
              setUpdate({
                isUpdating: true,
                updatePricing: activePricing,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivePricing;
