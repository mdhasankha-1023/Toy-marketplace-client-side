import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Others from "../Layout/Others";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddToys from "../Pages/AddToys/AddToys";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import AllToys from "../Pages/AllToys/AllToys";
import BlogPage from "../Pages/BlogPage/BlogPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/toys')
            },
            {
                path: '/update-profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/add-toys',
                element: <PrivetRoute><AddToys></AddToys></PrivetRoute>
            },
            {
                path: '/all-toys',
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/toys')
            },
            {
                path: '/blog', 
                element: <BlogPage></BlogPage>
            }
        ]
    },
    {
        path: '/',
        element: <Others></Others>,
        children: [
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: 'sign-in',
                element: <SignIn></SignIn>
            }
        ]
    }
])

export default router;