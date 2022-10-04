import React from "react";
import { useAppDispatch } from "../../../src/hooks/reduxHooks";
import { Pricing } from "../../../src/types/Pricing";
import { H1 } from "../../tags";

type PriceProps = {
  leg: google.maps.DirectionsLeg;
  activePricing: Pricing;
  setCost: React.Dispatch<React.SetStateAction<number>>;
};

const Price = ({ leg, activePricing, setCost }: PriceProps) => {
  const litreCostKM = activePricing.litrePerKm * activePricing.costPerGasLitre;
  if (!leg.distance || !leg.duration) return null;
  const cost = Math.floor(
    (leg.distance.value / 1000) * litreCostKM * activePricing.pricePerKm
  );
  setCost(cost);
  return (
    <div>
      <div>Distance: {leg.distance.text}</div>
      <div>Price: {cost}</div>
      <div>Duration: {leg.duration.text}</div>
    </div>
  );
};

export default Price;
