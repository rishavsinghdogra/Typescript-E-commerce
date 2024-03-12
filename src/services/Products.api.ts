import api from "./api-config";

export const apiProducts = async () => {
  return api.get("/products");
};

