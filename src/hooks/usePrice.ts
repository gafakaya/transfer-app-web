import { useEffect, useState } from "react";
import { Pricing } from "../types/Pricing";

type PriceProps = {
  leg: google.maps.DirectionsLeg;
  activePricing: Pricing;
};

const usePrice = ({ leg, activePricing }: PriceProps) => {
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const litreCostKM =
      activePricing.litrePerKm * activePricing.costPerGasLitre;
    if (!leg.distance || !leg.duration) return;
    const price = Math.floor(
      (leg.distance.value / 1000) * litreCostKM * activePricing.pricePerKm
    );
    setPrice(price);
  }, [
    activePricing.litrePerKm,
    activePricing.costPerGasLitre,
    activePricing.pricePerKm,
    leg.distance,
    leg.duration,
  ]);

  return price;
};

export default usePrice;
