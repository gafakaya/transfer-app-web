import { api } from "./intercept";
import {
  removeAccessToken,
  removeRefreshToken,
} from "../../handlers/tokensHandler";

const logout = async () => {
  try {
    const response = await api.post(
      "/auth/logout",
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
      }
    );
    removeAccessToken();
    removeRefreshToken();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default logout;
