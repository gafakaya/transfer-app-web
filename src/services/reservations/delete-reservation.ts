import { api } from "../auth/intercept";

const deleteReservation = async (id: string) => {
  try {
    const response = await api.delete(`/reservations/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default deleteReservation;
