import Main from "../LayOut/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Instructor from "../Pages/Instructor/Instructor";
import DashBoard from "../Pages/DashBoard/DashBoard/DashBoard";
import StudentDashboard from "../Pages/DashBoard/StudentDashboard/StudentDashboard";
import PrivateRoutes from "./PrivateRoutes";
import AddAClass from "../Pages/DashBoard/InstructorDashboard/AddAClass";
import InstructorClasses from "../Pages/DashBoard/InstructorDashboard/InstructorClasses";
import ManageUsers from "../Pages/DashBoard/AdminDashboard/ManageUsers";
import ManageClasses from "../Pages/DashBoard/AdminDashboard/ManageClasses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Payment from "../Pages/payment/Payment";
import EnrollClass from "../Pages/DashBoard/StudentDashboard/EnrollClass";
import PaymentHistory from "../Pages/DashBoard/StudentDashboard/PaymentHistory";
import StudentRoute from "./StudentRoute";
import AllClasses from "../Pages/Classes/Classes";
import Classes from "../Pages/Classes/Classes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path :"/",
            element : <Home></Home>
        },
        {
           path :"/login",
           element : <Login></Login> 
        },
        {
            path : '/register', 
            element : <Register></Register>
        },
        {
          path :'/instructors',
          element : <Instructor></Instructor>,
          loader : () => fetch('http://localhost:5000/instructors')
        },
        {
          path : "/classes",
          element : <Classes></Classes>
        }
      ]
    },
    {
      path :"dashboard",
      element : <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
      children : [
        {
          path : "studentdashboard",
          element : <StudentRoute><StudentDashboard></StudentDashboard></StudentRoute>
        },
        {
          path : "addAClass",
          element : <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
        },
        {
          path : 'instructorClasses',
          element : <InstructorRoute><InstructorClasses></InstructorClasses></InstructorRoute>
        },
        {
          path : 'manageUsers',
          element : <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path :'manageClasses',
          element : <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path :'payment',
          element : <StudentRoute><Payment></Payment></StudentRoute>,
          loader : () => fetch("http://localhost:5000/displayclasses")
        },
        {
          path :"enrollClass",
          element : <StudentRoute><EnrollClass></EnrollClass></StudentRoute>
        },
        {
          path : "paymentHistory",
          element :<StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
        }
      ]
    },
    {
     path : "*",
     element : <ErrorPage></ErrorPage>
    }
  ]);

  export default router ;
