import { api } from "../auth/intercept";

const getAllOwnPastReservation = async () => {
  try {
    const response = await api.get(`/reservations/own/past`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getAllOwnPastReservation;
