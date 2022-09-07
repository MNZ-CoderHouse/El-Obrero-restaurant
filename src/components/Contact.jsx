import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div className="container mb-3">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1> ¿ Tienes alguna pregunta ? </h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src='assets/people.png' alt='contactanos' height="500px" width="500px" />
                    </div>
                    <div className="col-md-6">
                        <form action="">
                            <div className="mb-3">
                                <p className='lead mb-4'> Si tienes alguna duda sobre nuestros productos o sobre cualquier otro asunto sobre las ventas,
                                    productos o sugerencias no dudes en contactarte con nosotros.
                                </p>
                                <label for="exampleForm" className="form-label"> Nombre </label>
                                <input type="text" className="form-control" id="exampleForm" placeholder="Jhon Smit"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label"> Tu Email </label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Jhon@gmail.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label"> Mensaje </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </form>
                        <NavLink to={"/"} className={'btn btn-outline-secondary px-5'}> Enviar Mensaje </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;