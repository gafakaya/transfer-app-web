import { api } from "../auth/intercept";

const setActive = async (id: string) => {
  try {
    const response = await api.patch(
      `/pricing/setactive/${id}`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem(`AT_KEY`)}` },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export default setActive;
