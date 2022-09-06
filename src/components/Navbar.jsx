import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
return (
    <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light p-md-3 text-white ">
            <div className="container-fluid py-2 ">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <NavLink className="nav-link fs-3 " to="/"> El Obrero Restaurant </NavLink>
                    <div className='mx-auto'></div>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active text-white " aria-current="page" to="/Home"> Inicio </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/letter"> La Carta </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/About"> Sobre Mi </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/blog"> Blog </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/Contact"> Contacto </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/cart"> Carrito </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
)
}

export default Navbar