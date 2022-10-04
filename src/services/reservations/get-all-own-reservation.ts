import { api } from "../auth/intercept";

const getAllOwnReservation = async () => {
  try {
    const response = await api.get(`/reservations/own`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getAllOwnReservation;
