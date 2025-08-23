import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { Navigate, useLocation } from "react-router"

export default function ProtectedRoute({children}) {
    const {token} = useContext(AuthContext)

    const Location = useLocation();

    if(token === null){
      return  <Navigate to="/login" state ={{from:Location.pathname}}/>
    }
    else{
        return children
    }

}
