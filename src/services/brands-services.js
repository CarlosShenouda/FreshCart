import { apiClient } from "./api-client";

/* eslint-disable no-useless-catch */
export async function GetAllBrands() {
    try {
        const options = {
            url: `/brands`,
            method: "GET",
        };

        const response = await apiClient.request(options);
        return response;
    } catch (error) {
        throw error;
    }
}


export async function GetBrandById({id}) {
    try {
        const options = {
            url: `/brands/${id}`,
            method: "GET",
        }

        const response = await apiClient.request(options);
        return response;
    } catch (error) {
        throw error;
    }
}