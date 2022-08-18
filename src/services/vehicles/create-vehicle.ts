import { api } from "../auth/intercept";

export type VehicleDataType = {
  vehicleName: string;
  vehicleDescription: string;
  capacity: string;
  basePrice: string;
};

const createVehicle = async (vehicleData: VehicleDataType) => {
  try {
    const response = await api.post("/vehicles", vehicleData);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default createVehicle;
