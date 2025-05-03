export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const getUser = (): any => {
  const userStr = localStorage.getItem("user");
  return userStr ? JSON.parse(userStr) : null;
};
