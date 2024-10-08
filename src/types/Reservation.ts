import { User } from "./Auth";
import { Vehicle } from "./Vehicle";

export type Reservation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  originLat: number;
  originLng: number;
  originName: string;
  destinationLat: number;
  destinationLng: number;
  destinationName: string;
  totalPrice: number;
  distanceValue: number;
  distanceText: string;
  durationValue: number;
  durationText: string;
  departureDate: Date;
  isRoundTrip: boolean | null;
  returnDate: Date | null;
  userId: string | null;
  user: User;
  vehicleId: string | null;
  vehicle: Vehicle;
};
