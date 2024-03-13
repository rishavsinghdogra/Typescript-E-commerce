import api from "./api-config";

export const apiProducts = async () => {
  return api.get("/products");
};

export const apiJewelery = async () => {
  return api.get("/products/category/jewelery");
}


