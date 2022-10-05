import React from "react";
import { Pricing } from "../../../../src/types/Pricing";
import { H1 } from "../../../tags";
import { UpdateType } from "./PricingSettings";
import PricingModule from "./PricingModule";

type PricingListProps = {
  pricingList: Pricing[] | null;
  setUpdate: React.Dispatch<React.SetStateAction<UpdateType>>;
};

const PricingList = ({ pricingList, setUpdate }: PricingListProps) => {
  return (
    <div>
      <hr className="border-[1px] border-skin-primary border-opacity-70 mb-2"></hr>
      {pricingList?.map((pricing) => {
        if (!pricing.isActive)
          return (
            <div key={pricing.id}>
              <PricingModule pricing={pricing} setUpdate={setUpdate} />
            </div>
          );
      })}
    </div>
  );
};

export default PricingList;
