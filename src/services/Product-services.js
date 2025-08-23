/* eslint-disable no-useless-catch */
import { apiClient } from "./api-client";

export async function getAllProducts({
  page,
  keyword,
  category,
  priceGreaterThan,
  priceLessThan,
  sortedBy,
  brand,
} = {}) {
  try {
    const params = new URLSearchParams();

    if (page) params.append("page", page);
    if (keyword) params.append("keyword", keyword);
    if (priceGreaterThan) params.append("price[gte]", priceGreaterThan);
    if (priceLessThan) params.append("price[lte]", priceLessThan);
    if (sortedBy) params.append("sort", sortedBy);
    if (category) params.append("category[in]", category);
    if (brand) params.append("brand", brand);

    const options = {
      method: "GET",
      url: `/products?${params.toString()}`,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}



export async function getProductById({ id }) {
  try {
    const options = {
      method: "GET",
      url: `/products/${id}`,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
