import { apiClient } from "./api-client"

/* eslint-disable no-useless-catch */
export async function addProductToWishlist({id}){
    try {
        const options ={
            method:"POST",
            url:`/wishlist`,
            data:{productId:id}
    
        }

        const response = await apiClient.request(options)
        return response
    } catch (error) {
        throw error
    }
}


export async function getWishlistItems(){
    try {
        const options = {
            url :`/wishlist`,
            method:"GET"
        }
        const response = await apiClient.request(options)
        return response
    } catch (error) {
        throw error
    }
}


export async function removeItemFromWishlist({id}){
    try {
        const options = {
            url :`/wishlist/${id}`,
            method:"DELETE"
        }
        const response = await apiClient.request(options)
        return response
    } catch (error) {
        throw error
    }
}