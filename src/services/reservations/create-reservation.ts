import { api } from "../auth/intercept";

export type CreateReservationDataType = {
  originLng: number;
  originLat: number;
  originName: string;
  destinationLng: number;
  destinationLat: number;
  destinationName: string;
  departureTimestamp: number;
  isRoundTrip?: boolean;
  returnTimestamp?: number;
};

const creaateReservation = async (
  createReservationData: CreateReservationDataType
) => {
  try {
    const response = await api.post("/reservations", createReservationData, {
      headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default creaateReservation;
