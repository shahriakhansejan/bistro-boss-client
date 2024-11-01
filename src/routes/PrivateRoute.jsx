import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useAuth()

    if(loading){
        return <progress className="progress w-full"></progress>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};



export default PrivateRoute;