import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoutes;