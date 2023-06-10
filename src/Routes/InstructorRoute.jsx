import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructors from "../hooks/useInstructors";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructors();
    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }
    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/"></Navigate>

};

export default InstructorRoute;