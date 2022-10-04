import { api } from "../auth/intercept";

export type UpdatePricingDataType = {
  litrePerKm?: number;
  costPerGasLitre?: number;
  pricePerKm?: number;
};

const updatePricing = async (id: string, updatePricingData: UpdatePricingDataType) => {
  try {
    const response = await api.patch(
      `/pricing/${id}`,
      updatePricingData,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default updatePricing;
