import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-5'>
      <footer className='footer text-white bg-dark mt-5'>
        <div className='container '>
          <footer className='py-5 '>
            <div className='row d-flex justify-content-between '>
              <div className='col-3'>
                <h4> El Obrero </h4>
              </div>

              <div className='col-2'>
                <ul className='nav flex-column '>
                  <li className='nav-item mb-2'>
                    <NavLink to='/' className='nav-link p-0 text-secondary'> Home </NavLink>
                  </li>
                  <li className='nav-item mb-2'>
                    <NavLink to='/product' className='nav-link p-0 text-secondary'> The Letter </NavLink>
                  </li>
                  <li className='nav-item mb-2'>
                    <NavLink to='/cabout' className='nav-link p-0 text-secondary'> About </NavLink>
                  </li>
                  <li className='nav-item mb-2'>
                    <NavLink to='/conect' className='nav-link p-0 text-secondary'> Contact </NavLink>
                  </li>
                </ul>
              </div>

              <div className='col-2'>
                <ul className='nav flex-column'>
                  <li className='nav-item mb-2'>
                    <NavLink to='#' className='nav-link p-0 text-secondary'> Restaurant </NavLink>
                  </li>
                  <li className='nav-item mb-2'>
                    <NavLink to='#' className='nav-link p-0 text-secondary'> Blog </NavLink>
                  </li>
                  <li className='nav-item mb-2'>
                    <NavLink to='#' className='nav-link p-0 text-secondary'> Recipe </NavLink>
                  </li>
                </ul>
              </div>

              <div className='col-2'>
                <ul className='nav flex-column'>
                  <li className='nav-item mb-2'>
                    <NavLink to='#' className='nav-link p-0 text-secondary'> Frecuent Questions </NavLink>
                  </li>
                  <li className='nav-item mb-2'>
                    <NavLink to='#' className='nav-link p-0 text-secondary'> Wheare we are? </NavLink>
                  </li>
                  <li className='nav-item mb-2'>
                    <NavLink to='#' className='nav-link p-0 text-secondary'> Testimonials </NavLink>
                  </li>
                </ul>
              </div>

              <div className='col-2'>
                <ul className='nav flex-column'>
                  <li className='nav-item mb-2'>
                    <NavLink to='#' className='nav-link p-0 text-secondary'> Staff </NavLink>
                  </li>
                  <li className='nav-item mb-2'>
                    <NavLink to='#' className='nav-link p-0 text-secondary'> Our Cheff </NavLink>
                  </li>
                  <li className='nav-item mb-2'>
                    <NavLink to='#' className='nav-link p-0 text-secondary'> Mission </NavLink>
                  </li>
                </ul>
              </div>

              <div className='d-flex justify-content-between pt-4 mt-4 border-top'>
                <p> Copyright &copy; 2022 El Obrero all rigths reserved. </p>
                <NavLink className='link-secondary' target="_blank" to='https://matiasnzamora.com.ar'> Portafolio Web Desinger </NavLink>

                <ul className='list-unstyled d-flex'>
                  <li className='ms-3'>
                    <NavLink className='link-secondary' target="_blank" to='https://www.instagram.com'><i className='fa fa-instagram fa-2x' /></NavLink>
                  </li>
                  <li className='ms-3'>
                    <NavLink className='link-secondary' target="_blank" to='https://www.facebook.com'><i className='fa fa-facebook fa-2x' /></NavLink>
                  </li>
                  <li className='ms-3'>
                    <NavLink className='link-secondary' target="_blank" to='https://www.linkedin.com'><i className='fa fa-linkedin fa-2x' /></NavLink>
                  </li>
                  <li className='ms-3'>
                    <NavLink className='link-secondary' target="_blank" to='/'><i className='fa fa-whatsapp fa-2x' /></NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  )
}

export default Footer