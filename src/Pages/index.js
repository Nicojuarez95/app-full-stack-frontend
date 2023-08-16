import IndexLayout from "../layouts/IndexLayouts/IndexLayouts";
import MainLayout from "../layouts/MainLayouts/MainLayouts.jsx"
import Index from "./Index/Index";
import Index2 from "./Index2/Index"

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexLayout />,
        children: [
            { path: '/', element: <Index /> },
        ]
    },
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/perfil", 
                element: <Index2/>
            },
            
        ]
    }
])