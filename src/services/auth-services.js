/* eslint-disable no-useless-catch */
import { apiClient } from "./api-client";

export async function signUpData(values){
try{
      const options = {
      method: "POST",
      url: `/auth/signup`,
      data: {
        name: values.name,
        email: values.email,
        password: values.password,
        rePassword: values.rePassword,
        phone: values.phone,
      },
    };
    const response = await apiClient.request(options);
    return response
}
catch(error){
throw error;
}
}


export async function logInDate(values){
try {
   const options = {
        method: "POST",
        url: `/auth/signin`,
        data: {
          email: values.email,
          password: values.password,
        },
      };

      const response = await apiClient.request(options);
      return response
} catch (error) {
  throw error
}
}



export async function ForgetPassword ({email}){
    try {
        const options = {
            method: "POST",
            url: `/auth/forgotPasswords`,
            data: { email }
        }
        const response = await apiClient.request(options)
        console.log(response);
        return response
    } catch (error) {
        throw error
    }
}

