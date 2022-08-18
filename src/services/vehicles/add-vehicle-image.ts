import { api } from "../auth/intercept";

export type AddVehicleImageType = {
  vehicleId: string;
  file: File;
};

const addVehicleImage = async (addVehicleImageData: AddVehicleImageType) => {
  const { vehicleId, file } = addVehicleImageData;
  try {
    let formData = new FormData();
    formData.append("file", file);
    const response = await api.post(
      `/vehicles/addImage/${vehicleId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default addVehicleImage;
