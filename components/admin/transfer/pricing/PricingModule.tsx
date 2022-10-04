import {
  CheckIcon,
  DotsVerticalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React from "react";
import deletePricing from "../../../../src/services/pricing/delete-pricing";
import setActive from "../../../../src/services/pricing/set-active";
import { Pricing } from "../../../../src/types/Pricing";
import { H2 } from "../../../tags";
import { UpdateType } from "./Pricing";

type PricingModuleProps = {
  pricing: Pricing;
  setUpdate: React.Dispatch<React.SetStateAction<UpdateType>>;
};

const PricingModule = ({ pricing, setUpdate }: PricingModuleProps) => {
  return (
    <div className="flex flex-col justify-between w-1/2 p-2 bg-skin-secondary mb-2 gap-1">
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
        <div
          className=" hover:bg-black hover:text-white
          rounded-md p-0.5 duration-300 transition-all"
          onClick={() => {
            setActive(pricing.id);
          }}
        >
          <CheckIcon className="h-5" />
        </div>
        <div
          className="hover:bg-black hover:text-white
          rounded-md p-0.5 duration-300 transition-all"
          onClick={() => {
            setUpdate({
              isUpdating: true,
              updatePricing: pricing,
            });
          }}
        >
          <PencilIcon className="h-5" />
        </div>
        <div
          className="hover:bg-black hover:text-white
          rounded-md p-0.5 duration-300 transition-all"
          onClick={() => deletePricing(pricing.id)}
        >
          <TrashIcon className="h-5" />
        </div>
      </div>
    </div>
  );
};

export default PricingModule;
