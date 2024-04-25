import React from "react";
import { Outlet } from "react-router"
import setup from "./config/setup"
const {page_title} = setup;

function UserLayoute() {
    return (
        <div>
            <div className ="m-10" >
                <h4 >{page_title}</h4>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default UserLayoute;