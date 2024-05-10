import { createBrowserRouter } from "react-router-dom";

import Home from "../Page/Home/Home/Home";

import Main from "../Layout/Main";
import Login from './../Page/Login/Login';
import SignUp from './../Page/SignUp/SignUp';





const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signup",
          element: <SignUp></SignUp>,
        },
      ]
    },
  ]);

  export default router;