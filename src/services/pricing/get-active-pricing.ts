import { api } from "../auth/intercept";

const getActivePricing = async () => {
  try {
    const response = await api.get("/pricing/active", {
      headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getActivePricing;
