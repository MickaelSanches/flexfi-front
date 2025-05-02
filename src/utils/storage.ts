export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const getFirstName = (): string | null => {
  return localStorage.getItem("firstName");
};
