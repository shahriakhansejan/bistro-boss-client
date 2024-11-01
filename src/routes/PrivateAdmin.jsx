import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const PrivateAdmin = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, adminLoading] = useAdmin();
    const location = useLocation();

    if(loading || adminLoading){
        return <progress className="progress w-full"></progress>
    }

    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateAdmin;