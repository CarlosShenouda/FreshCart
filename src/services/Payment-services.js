import { apiClient } from "./api-client";

/* eslint-disable no-useless-catch */
// eslint-disable-next-line no-unused-vars
export async function payment({shippingAddress}) {
  try {
    const options = {
      url: `/orders/checkout-session/67b210df429eb834606c7a30?url=http://localhost:3000`,
      method: "POST",
      data: {
        shippingAddress: {
          details: "",
          phone: "",
          city: "",
        },
      },
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}