const TOKEN_KEY = "token";
const USER_KEY = "user";

type UserType = {
  _id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  formFullfilled?: boolean;
  isVerified?: boolean;
  userReferralCode?: string;
  // Ajoute d'autres champs si besoin
};

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getUser = (): UserType | null => {
  const userStr = localStorage.getItem(USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
};

export const setUser = (user: UserType): void => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const updateUser = (updates: Partial<UserType>): void => {
  const currentUser = getUser();
  if (!currentUser) return;
  const updatedUser = { ...currentUser, ...updates };
  setUser(updatedUser);
};

export const removeUser = (): void => {
  localStorage.removeItem(USER_KEY);
};

export const clearStorage = (): void => {
  localStorage.clear();
};
