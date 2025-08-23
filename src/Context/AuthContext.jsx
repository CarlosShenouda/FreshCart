/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import { children , createContext, useState } from "react"
import { toast } from "react-toastify"
import { ForgetPassword } from "../services/auth-services"


export const AuthContext = createContext(null)
export default function AuthContextProvider({children}) {

const[token, setToken] = useState(localStorage.getItem("token") || sessionStorage.getItem("token") || null)

function logOut (){
  setToken(null)
  localStorage.removeItem("token")
  sessionStorage.removeItem("token")
  toast.success("Logout successfully")
  
}


const [forgotPassword , setForgotPassword] = useState("")

async function handleForgotPassword(email) {
  try {
    const response = await ForgetPassword({email})
    console.log(response);
    if(response.success){
      toast.success(response.data.message)
    }
  } catch (error) {
    toast.error(error.message || "Something went wrong")
  }
}


  return<AuthContext.Provider value={{token,setToken , logOut , handleForgotPassword , forgotPassword , setForgotPassword}}>
{children}
  </AuthContext.Provider> 
}
