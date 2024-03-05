import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "./index.css"
// import "../node_modules/bootstrap/dist/css/js/bootstarp.bundle";

const  Navbar = () =>{
    return(
        <>
    <div className="container-fluid nav-bg">
        <div className="row">
            <div className="col-10 mx-auto">
             <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                   <NavLink to="/" className="d-flex align-items-center text-dark text-decoration-none">
                   <span className="mheading">Pricing example</span>
                   </NavLink>

                 <nav className="navbar d-inline-flex mt-2 mt-md-0 ms-md-auto">
                 <NavLink activeClassName='active' className="me-3 py-2 px-3 text-dark text-decoration-none" to="/">Home</NavLink>
                 <NavLink activeClassName='active' className="me-3 py-2 px-3 text-dark text-decoration-none" to="/about">About</NavLink>
                 <NavLink activeClassName='active' className="me-3 py-2 px-3 text-dark text-decoration-none" to="/services">Services</NavLink>
                 <NavLink activeClassName='active' className="py-2 text-dark px-3 text-decoration-none" to="contact">Contact</NavLink>
                  </nav>
             </div>
            </div>
        </div>
    </div>
           
        </>
    )

}

export default Navbar;