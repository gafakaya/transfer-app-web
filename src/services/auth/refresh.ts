import { api } from "./intercept";
import {
  updateAccessToken,
  updateRefreshToken,
} from "../../handlers/tokensHandler";

const refresh = async () => {
  try {
    const response = await api.post(
      "/auth/refresh",
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem(`RT_KEY`)}` },
      }
    );
    updateAccessToken(response.data.access_token);
    updateRefreshToken(response.data.refresh_token);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default refresh;
