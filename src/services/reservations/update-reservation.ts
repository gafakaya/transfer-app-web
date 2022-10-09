import { api } from "../auth/intercept";

export type UpdateReservationDataType = {
  originLng?: number;
  originLat?: number;
  originName?: string;
  destinationLng?: number;
  destinationLat?: number;
  destinationName?: string;
  departureDate: Date | null;
  isRoundTrip?: boolean;
  returnDate?: Date;
  totalPrice?: number;
  distanceValue?: number;
  distanceText?: string;
  durationValue?: number;
  durationText?: string;
  vehicleId?: string;
};

const updateReservation = async (
  id: string,
  updateReservationData: UpdateReservationDataType
) => {
  try {
    const response = await api.patch(
      `/reservations/${id}`,
      updateReservationData,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default updateReservation;
