import React from 'react';
// import "./Auth.scss";
import { NavLink } from 'react-router-dom';
import { Outlet } from "react-router-dom"

const Auth = () => {
  return (
    <div className='auth'>
      <div className="cicle"></div>
      <div className='auth-form'>
         {/* <!-- Pills navs --> */}
<ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <NavLink className={(navData) => (navData.isActive ? 'nav-link active' : 'nav-link')} to="/auth/login">
    <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a>
    </NavLink>
  </li>
  <li className="nav-item" role="presentation">
   <NavLink className={(navData) => (navData.isActive ? 'nav-link active' : 'nav-link')} to="/auth/register">
   <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
      aria-controls="pills-register" aria-selected="false">Register</a>
   </NavLink>
  </li>
</ul>
{/* <!-- Pills navs --> */}
        <div>
         <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Auth