import React from 'react'
import { Link } from 'react-router-dom'

function Topbar() {
    return (
            <div className="page-main-header">
                <div className="main-header-left">
                    <div className="logo-wrapper">
                        <Link to='/'>
                            <img
                                src="/backend/Universal - Premium Admin Template_files/logo-light.png"
                                className="image-dark"
                                alt=""
                            />
                            <img
                                src="/backend/Universal - Premium Admin Template_files/logo-light-dark-layout.png"
                                className="image-light"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
                <div className="main-header-right row">
                    <div className="mobile-sidebar col-1 ps-0">
                        <div className="text-start switch-sm">
                            <label className="switch">
                                <input type="checkbox" id="sidebar-toggle" defaultChecked="" />
                                <span className="switch-state" />
                            </label>
                        </div>
                    </div>
                    <div className="nav-right col">
                        <ul className="nav-menus">
                            <li>
                                <form className="form-inline search-form">
                                    <div className="form-group">
                                        <input
                                            type="search"
                                            className="form-control-plaintext"
                                            placeholder="Search.."
                                        />
                                        <span className="d-sm-none mobile-search"></span>
                                    </div>
                                </form>
                            </li>
                            <li>
                                <a
                                    href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html#!"
                                    onclick="javascript:toggleFullScreen()"
                                    className="text-dark"
                                >
                                    <img
                                        className="align-self-center pull-right me-2"
                                        src="/backend/Universal - Premium Admin Template_files/browser.png"
                                        alt="header-browser"
                                    />
                                </a>
                            </li>
                            <li className="onhover-dropdown">
                                <a
                                    href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html#!"
                                    className="txt-dark"
                                >
                                    <img
                                        className="align-self-center pull-right me-2"
                                        src="/backend/Universal - Premium Admin Template_files/translate.png"
                                        alt="header-translate"
                                    />
                                </a>
                                <ul className="language-dropdown onhover-show-div p-20">
                                    <li>
                                        <a
                                            href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html#"
                                            data-lng="en"
                                        >
                                            <i className="flag-icon flag-icon-ws" /> English
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html#"
                                            data-lng="es"
                                        >
                                            <i className="flag-icon flag-icon-va" /> Spanish
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html#"
                                            data-lng="pt"
                                        >
                                            <i className="flag-icon flag-icon-id" /> Portuguese
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html#"
                                            data-lng="fr"
                                        >
                                            <i className="flag-icon flag-icon-fr" /> French
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="onhover-dropdown">
                                <a
                                    href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html#!"
                                    className="txt-dark"
                                >
                                    <img
                                        className="align-self-center pull-right me-2"
                                        src="/backend/Universal - Premium Admin Template_files/notification.png"
                                        alt="header-notification"
                                    />
                                    <span className="badge rounded-pill badge-primary notification">
                                        3
                                    </span>
                                </a>
                                {/* <ul className="notification-dropdown onhover-show-div">
                                    <li>
                                        Notification{" "}
                                        <span className="badge rounded-pill badge-secondary text-white text-uppercase pull-right">
                                            3 New
                                        </span>
                                    </li>
                                    <li>
                                        <div className="d-flex">
                                            <i className="flex-shrink-0 align-self-center notification-icon icofont icofont-shopping-cart bg-primary" />
                                            <div>
                                                <h6 className="mt-0">Your order ready for Ship..!</h6>
                                                <p className="mb-0">
                                                    Lorem ipsum dolor sit amet, consectetuer elit.
                                                </p>
                                                <span>
                                                    <i className="icofont icofont-clock-time p-r-5" />
                                                    Just Now
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex">
                                            <i className="flex-shrink-0 align-self-center notification-icon icofont icofont-download-alt bg-success" />
                                            <div>
                                                <h6 className="mt-0 txt-success">Download Complete</h6>
                                                <p className="mb-0">
                                                    Lorem ipsum dolor sit amet, consectetuer elit.
                                                </p>
                                                <span>
                                                    <i className="icofont icofont-clock-time p-r-5" />5 minutes
                                                    ago
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex">
                                            <i className="flex-shrink-0 align-self-center notification-icon icofont icofont-recycle bg-danger" />
                                            <div>
                                                <h6 className="mt-0 txt-danger">250 MB trush files</h6>
                                                <p className="mb-0">
                                                    Lorem ipsum dolor sit amet, consectetuer elit.
                                                </p>
                                                <span>
                                                    <i className="icofont icofont-clock-time p-r-5" />
                                                    25 minutes ago
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="text-center">
                                        You have Check{" "}
                                        <a href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html#">
                                            all
                                        </a>{" "}
                                        notification
                                    </li>
                                </ul> */}
                            </li>
                            <li className="onhover-dropdown">
                                <div className="d-flex align-items-center">
                                    <img
                                        className="align-self-center pull-right flex-shrink-0 me-2"
                                        src="/backend/Universal - Premium Admin Template_files/user.png"
                                        alt="header-user"
                                    />
                                    <div>
                                        <h6 className="m-0 txt-dark f-16">
                                            My Account
                                            <i className="fa fa-angle-down pull-right ms-2" />
                                        </h6>
                                    </div>
                                </div>
                                <ul className="profile-dropdown onhover-show-div p-20">
                                    {/* <li>
                                        <a href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html#">
                                            <i className="icon-user" />
                                            Edit Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html#">
                                            <i className="icon-email" />
                                            Inbox
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html#">
                                            <i className="icon-check-box" />
                                            Task
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html#">
                                            <i className="icon-comments" />
                                            Chat
                                        </a>
                                    </li> */}
                                    <li>
                                        <a href="https://admin.pixelstrap.com/universal/starter-kit/layout-light.html#">
                                            <i className="icon-power-off" />
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-lg-none mobile-toggle">
                            <i className="icon-more" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Topbar
