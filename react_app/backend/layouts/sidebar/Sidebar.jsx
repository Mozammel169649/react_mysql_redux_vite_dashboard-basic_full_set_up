import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="page-body-wrapper">
            {/*Page Sidebar Start*/}
            <div className="page-sidebar custom-scrollbar">
                <div className="sidebar-user text-center">
                    <div>
                        <img
                            className="img-50 rounded-circle"
                            src="/backend/Universal - Premium Admin Template_files/1.jpg"
                            alt="#"
                        />
                    </div>
                    <h6 className="mt-3 f-12">Johan Deo</h6>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        {" "}
                        <Link to="/" className='sidebar-header'>
                            <i className="bx bx-radio-circle" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        {" "}
                        <Link to="user" className='sidebar-header'>
                            <i className="bx bx-radio-circle" />
                            <span>Users</span>
                        </Link>
                    </li>
                </ul>
                <div className="sidebar-widget text-center">
                    <div className="sidebar-widget-top">
                        <h6 className="mb-2 fs-14">Need Help</h6>
                        <i className="icon-bell" />
                    </div>
                    <div className="sidebar-widget-bottom p-20 m-20">
                        <p>
                            +1 234 567 899
                            <br />
                            help@example.com
                            <br />
                            <a href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html#">
                                Visit FAQ
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            {/*Page Sidebar Ends*/}
            <div className="page-body">
                <div className='dashboard_wrapper m-3'>
                    <Outlet></Outlet>
                </div>

                <footer className="footer-starter-kit">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-xl-6 footer-copyright">
                                <p className="mb-0">
                                    2021 © Universal theme by{" "}
                                    <a href="https://admin.pixelstrap.com/universal/default/index.html">
                                        pixelstrap
                                    </a>
                                </p>
                            </div>
                            <div className="col-sm-12  col-md-6 col-xl-6">
                                <ul className="footer-links">
                                    <li>
                                        <a href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html">
                                            Privacy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html">
                                            T&amp;C
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {/*Page Body Ends*/}
        </div>
    )
}

export default Sidebar