import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Topbar from './topbar/Topbar'


function Layouts() {
    return (
        <div>
            <div className="page-wrapper">

                {/*sidebar wrapper */}
                <Sidebar></Sidebar>
                {/*end sidebar wrapper */}

                {/*start right side*/}
                <Topbar></Topbar>
                {/*end right side*/}

            </div>
        </div>
    )
}

export default Layouts