import { api } from "../auth/intercept";

const getOwnReservation = async (id: string) => {
  try {
    const response = await api.get(`/reservations/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getOwnReservation;
