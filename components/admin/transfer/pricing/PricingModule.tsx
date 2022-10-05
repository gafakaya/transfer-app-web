import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import deletePricing from "../../../../src/services/pricing/delete-pricing";
import setActive from "../../../../src/services/pricing/set-active";
import { Pricing } from "../../../../src/types/Pricing";
import { H2 } from "../../../tags";
import { IconButton } from "../../../tags/buttons";
import { UpdateType } from "./PricingSettings";

type PricingModuleProps = {
  pricing: Pricing;
  setUpdate: React.Dispatch<React.SetStateAction<UpdateType>>;
};

const PricingModule = ({ pricing, setUpdate }: PricingModuleProps) => {
  return (
    <div className="flex flex-col justify-between w-full p-2 bg-skin-secondary mb-2 gap-1">
      <div className="flex flex-col">
        <div>
          <span>Cost Gas Litre: </span>
          <span>{pricing.costPerGasLitre}</span>
        </div>
        <div>
          <span>Litre Per Km: </span>
          <span>{pricing.litrePerKm}</span>
        </div>
        <div>
          <span>Price Per Km: </span>
          <span>{pricing.pricePerKm}</span>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <IconButton
          Icon={CheckIcon}
          iconClassName={`h-[20px]`}
          onClick={() => {
            setActive(pricing.id);
          }}
        />
        <IconButton
          Icon={PencilIcon}
          iconClassName={`h-[20px]`}
          onClick={() => {
            setUpdate({
              isUpdating: true,
              updatePricing: pricing,
            });
          }}
        />
        <IconButton
          Icon={TrashIcon}
          iconClassName={`h-[20px]`}
          onClick={() => deletePricing(pricing.id)}
        />
      </div>
    </div>
  );
};

export default PricingModule;
