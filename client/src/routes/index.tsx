import {
    createBrowserRouter,
} from "react-router-dom";
import InfoUser from "../page/InfoUser";
import LoginPage from "../page/Login";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },

    {
        path: "/",
        element: <InfoUser />
    }

]);