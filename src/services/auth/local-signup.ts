import { api } from "./intercept";
import {
  updateAccessToken,
  updateRefreshToken,
} from "../../handlers/tokensHandler";

export type SignupDataType = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  phoneIdd: string;
  trId: string;
};

const localSignup = async (signupData: SignupDataType) => {
  try {
    const response = await api.post("/auth/local/signup", signupData);
    updateAccessToken(response.data.access_token);
    updateRefreshToken(response.data.refresh_token);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default localSignup;
