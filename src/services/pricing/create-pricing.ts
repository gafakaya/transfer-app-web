import { api } from "../auth/intercept";

export type CreatePricingDataType = {
  litrePerKm: number;
  costPerGasLitre: number;
  pricePerKm: number;
};

const createPricing = async (createPricingData: CreatePricingDataType) => {
  try {
    const response = await api.post("/pricing", createPricingData, {
      headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default createPricing;
