import { api } from "../auth/intercept";

const getAllPastReservation = async () => {
  try {
    const response = await api.get(`/reservations/all/past`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getAllPastReservation;
