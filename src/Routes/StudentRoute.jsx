import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useStudent from "../hooks/useStudent";

const StudentRoute = ({children}) => {
    const { user , loading } = useAuth(); 
    const [isStudent, isStudentLoading] = useStudent();
    if(loading || isStudentLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isStudent){
         return children ;
    }
    return <Navigate to="/" replace ></Navigate>
};

export default StudentRoute;