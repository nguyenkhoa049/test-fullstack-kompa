import {
    createBrowserRouter,
} from "react-router-dom";
import InfoUser from "../page/InfoUser";
import LoginPage from "../page/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/infoUser",
        element: <InfoUser />
    }

]);