import api from "./api-config";

//All Products

export const apiProducts = async () => {
  return api.get("/products");
};

// export const apiJewelery = async () => {
//   return api.get("products/category/jewelery");
// };
