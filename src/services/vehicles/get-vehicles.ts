import { api } from "../auth/intercept";

const getVehicles = async () => {
  try {
    const response = await api.get("/vehicles");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getVehicles;
