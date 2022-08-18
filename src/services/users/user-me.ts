import { api } from "../auth/intercept";

const userMe = async () => {
  try {
    const response = await api.get("/users/me", {
      headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default userMe;
