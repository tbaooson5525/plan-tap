import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import LooseWeight from "../pages/LooseWeight";
import Muscle from "../pages/Muscle";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index:true,
                element: <LooseWeight/>
            },
            {
                path: 'tangco3vong',
                element: <Muscle/>,
            }
        ]
    },
]);

export default router;