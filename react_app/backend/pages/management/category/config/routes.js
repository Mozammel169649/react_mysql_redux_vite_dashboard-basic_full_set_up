import Layoute from "../Layout"
import All from "../pages/All"
import Create from "../pages/Create"
import Edit from "../pages/Edit"
import View from "../pages/View"
import setup from "./setup"

const {route_prefix} = setup

export default {
    path: route_prefix,
    element:<Layoute></Layoute>,
    children: [
        {
            path: "",
            element: <All></All>
        },
        {
            path: "create",
            element: <Create></Create>
        },
        {
            path: "edit/:id",
            element: <Edit></Edit>
        },
        {
            path: "view/:id",
            element: <View></View>
        }
        
    ]
}
