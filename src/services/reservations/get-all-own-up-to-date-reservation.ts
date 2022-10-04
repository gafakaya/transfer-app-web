import { api } from "../auth/intercept";

const getAllOwnUpToDateReservation = async () => {
  try {
    const response = await api.get(`/reservations/own/uptodate`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getAllOwnUpToDateReservation;
