import Main from "../LayOut/Main";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
  ]);

  export default router ;
