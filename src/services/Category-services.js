import { apiClient } from "./api-client";

/* eslint-disable no-useless-catch */
export async function GetAllCategories() {
try {
   const options = {
        url: `/categories`,
        method: "GET"
    };

    const response = await apiClient.request(options);
    return response;
} catch (error) {
    throw error;
}
}


export async function getSubcategories(){
    try {
        const options = {
            url: `/subcategories`,
            method: "GET"
        };
    
        const response = await apiClient.request(options);
        return response;
    } catch (error) {
        throw error;
    }
}