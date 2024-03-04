import api from "./api-config";

export const apiLoginUser = async (payload) => {
  return api.post("/auth/login", payload);
};
