import Main from "../LayOut/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Instructor from "../Pages/Instructor/Instructor";
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
          path :'instructors',
          element : <Instructor></Instructor>,
          loader : () => fetch('http://localhost:5000/instructors')
        },
        {
          path : "classes",
          element : <Classes></Classes>,
          loader : () => fetch("http://localhost:5000/classes")
        }
      ]
    },
  ]);

  export default router ;
