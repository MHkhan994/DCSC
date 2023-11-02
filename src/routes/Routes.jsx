import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Homepage/Home";
import Committee from "../Pages/Committee/Committee";
import AllEvent from "../Pages/AllEvent/AllEvent";
import Gallery from "../Pages/Gallery/Gallery";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/committee',
                element: <Committee></Committee>
            },
            {
                path: '/all-event',
                element: <AllEvent></AllEvent>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            }
        ]
    }
])