import { api } from "./intercept";
import {
  updateAccessToken,
  updateRefreshToken,
} from "../../handlers/tokensHandler";

type signupDataType = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

const localSignup = async (signupData: signupDataType) => {
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
