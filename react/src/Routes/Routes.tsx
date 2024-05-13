import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AnsatteSide from "../Pages/AnsatteSide/AnsatteSide";
import LokasjonSide from "../Pages/LokasjonSide/LokasjonSide";
import Hjemmeside from "../Pages/Hjemmeside/Hjemmeside";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Hjemmeside />,
            },
            {
                path: "/ansatte",
                element: <AnsatteSide />,
            },
            {
                path: "/lokasjon",
                element: <LokasjonSide />,
            },
        ],
    }
])