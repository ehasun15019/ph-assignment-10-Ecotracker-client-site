import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/Root-Layout/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layout/Auth-Layout/AuthLayout";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                path: "/",
                index: true,
                Component: Home,
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
            }
        ]
    }
])