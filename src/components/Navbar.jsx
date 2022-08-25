import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2 d-flex ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/Home"> Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/letter"> The letter </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/About"> about me </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/blog"> Blog </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Contact"> Contact </NavLink>
                    </li>
                </ul>
                {/* <NavLink className="navbar-brand fw-bold fs-3 mx-auto" to="/"> <img src= '' className='w-25 h-25' alt="Los Magios Logo"/> Magios Shop </NavLink> */}
                {/* <CartBtn/> */}
            </div>
        </div>
    </nav>
  )
}

export default Navbar