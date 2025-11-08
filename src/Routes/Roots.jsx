import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/Root-Layout/RootLayout";
import Home from "../Pages/Home/Home";

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
    }
])