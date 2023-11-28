import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDes from "../Pages/NewsDes/NewsDes";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



const myCreatedRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },

            {
                path: "/details/:id",
                element: <PrivateRoute><NewsDes></NewsDes></PrivateRoute>
            },

        ]
    },


]);

export default myCreatedRoutes;