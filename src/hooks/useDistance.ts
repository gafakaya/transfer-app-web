import { useEffect, useState } from "react";

const litresPerKM = 10 / 100;
const gasLitreCost = 1.5;
const litreCostKM = litresPerKM * gasLitreCost;

type DistanceProps = {
  leg: google.maps.DirectionsLeg;
};

export const useDistance = ({ leg }: DistanceProps) => {
  if (!leg.distance || !leg.duration) return;

  const cost = Math.floor(leg.distance.value / 1000) * litreCostKM;

  return cost;
};
