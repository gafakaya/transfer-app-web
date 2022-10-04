import { api } from "../auth/intercept";

const getAllUpToDateReservation = async () => {
  try {
    const response = await api.get(`/reservations/all/uptodate`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getAllUpToDateReservation;
