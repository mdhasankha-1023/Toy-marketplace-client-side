import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Others from "../Layout/Others";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/toys')
            },
            {
                path: '/update-profile',
                element: <UpdateProfile></UpdateProfile>
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