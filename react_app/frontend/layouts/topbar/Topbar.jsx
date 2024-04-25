import React from 'react'
import { Outlet } from 'react-router'

function Topbar() {

  return (
    <header>
      <section id="navid">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link active"  aria-current="page" href="/logout">LogOut</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#login">Login</a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section>
        <div className='dashboard_wrapper m-3'>
          <Outlet></Outlet>
        </div>
      </section>
    </header>

  )
}

export default Topbar