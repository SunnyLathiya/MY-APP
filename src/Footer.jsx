import React from 'react';
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Footer = () => {
    return(
        <>
            <footer className="page-footer font-small blue">

                  <div className="footer-copyright text-center py-3">© 2020 Copyright:
                        <NavLink to="/"> MDBootstrap.com</NavLink>
                  </div>


            </footer>

        </>
    )
}

export default Footer;