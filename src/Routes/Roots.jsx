import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/Root-Layout/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layout/Auth-Layout/AuthLayout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ForgotPassword from "../Pages/Forgot-Password/ForgotPassword";
import AllChallenges from "../Components/Challenges/All-Challenges/AllChallenges";
import CardDetails from "../Pages/Card-Details/CardDetails";
import JoinChallenge from "../Pages/Join-challenge/JoinChallenge";
import AddChallenge from "../Pages/Add-Challenge/AddChallenge";
import PrivateRoutes from "./Private-Routes/PrivateRoutes";
import Error from "../Pages/Error/error";
import AllTips from "../Pages/All-Tips/AllTips";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                index: true,
                Component: Home,
            },
            {
                path: "show-all-challenges",
                Component: AllChallenges,
            },
            {
                path: "challenges/:id",
                Component: CardDetails
            },
            {
                path: "/all-tips",
                Component: AllTips,
            },
            {
                path: "challenges/join/:id",
                element: <PrivateRoutes>
                    <JoinChallenge></JoinChallenge>
                </PrivateRoutes>,
            },
            {
                path: "challenges/add",
                element: <PrivateRoutes>
                    <AddChallenge></AddChallenge>
                </PrivateRoutes>,
            }
        ]
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "register",
                Component: Register,
            },
            {
                path: "login",
                Component: Login,
            },
            {
                path: "forgot-password",
                Component: ForgotPassword,
            }
        ]
    }
])