import { api } from "../auth/intercept";

const getAllPricing = async () => {
  try {
    const response = await api.get("/pricing", {
      headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getAllPricing;
