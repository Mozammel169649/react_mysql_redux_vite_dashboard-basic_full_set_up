import UserLayoute from "../Layout"
import All from "../pages/All"
import setup from "./setup"

const {route_prefix} = setup

export default {
    path: route_prefix,
    element:<UserLayoute></UserLayoute>,
    children: [
        {
            path: "",
            element: <All></All>
        },
        
    ]
}
