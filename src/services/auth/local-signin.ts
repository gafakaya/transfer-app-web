import { useAppDispatch } from "../../hooks/reduxHooks";
import { api } from "./intercept";
import {
  updateAccessToken,
  updateRefreshToken,
} from "../../handlers/tokensHandler";

export type SigninDataType = {
  email: string;
  password: string;
};

const localSignin = async (signinData: SigninDataType) => {
  try {
    const response = await api.post("/auth/local/signin", signinData);
    updateAccessToken(response.data.access_token);
    updateRefreshToken(response.data.refresh_token);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default localSignin;
