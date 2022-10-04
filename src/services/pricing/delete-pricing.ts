import { api } from "../auth/intercept";

const deletePricing = async (id: string) => {
  try {
    const response = await api.delete(`/pricing/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default deletePricing;
