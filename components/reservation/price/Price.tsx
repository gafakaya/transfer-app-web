import { BanknotesIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useAppDispatch } from "../../../src/hooks/reduxHooks";
import usePrice from "../../../src/hooks/usePrice";
import { Pricing } from "../../../src/types/Pricing";
import { H1 } from "../../tags";

type PriceProps = {
  leg: google.maps.DirectionsLeg;
  activePricing: Pricing;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  visible?: boolean;
};

const Price = ({
  leg,
  activePricing,
  setPrice,
  visible = true,
}: PriceProps) => {
  const price = usePrice({ leg, activePricing });
  if (!leg.distance || !leg.duration) return null;
  console.log("Price", price);
  setPrice(price);
  return (
    <>
      {visible == true ? (
        <div className="flex gap-1.5 items-center bg-skin-green px-2 py-0.5 rounded-lg">
          <BanknotesIcon className="h-5" />
          <span className="">{price}$</span>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Price;
