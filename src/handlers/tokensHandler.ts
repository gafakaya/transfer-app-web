const AT_KEY = "AT_KEY";
const RT_KEY = "RT_KEY";

export const updateAccessToken = (accessToken: string) => {
  localStorage.setItem(AT_KEY, accessToken);
};

export const updateRefreshToken = (refreshToken: string) => {
  localStorage.setItem(RT_KEY, refreshToken);
};

export const removeAccessToken = () => {
  localStorage.removeItem(AT_KEY);
};

export const removeRefreshToken = () => {
  localStorage.removeItem(RT_KEY);
};
