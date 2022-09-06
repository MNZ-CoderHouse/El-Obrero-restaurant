import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {

    const state = useSelector((state) => state.addItem);
    let total = 0;

    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0"> {item.title} </h6>
                </div>
                <span className="text-muted">$ {item.price} </span>
            </li>
        )
    };

    return (
    <>
        <div className="container my-5">
            <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Your cart</span>
                        <span className="badge bg-primary rounded-pill"> {state.length} </span>
                    </h4>
                    <ul className="list-group mb-3">
                        {state.map(itemList)}
                        <li className="list-group-item d-flex justify-content-between">
                            <span> Total (USD) </span>
                            <strong>$ {total} </strong>
                        </li>
                    </ul>
                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code" />
                            <button type="submit" className="btn btn-secondary"> Remitir </button>
                        </div>
                    </form>
                </div>
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3"> Direccion de facturación </h4>
                    <form className="needs-validation" novalidate="">
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label"> Nombre </label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                <div className="invalid-feedback">
                                    Nombre valido requerido.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label"> Apellido </label>
                                <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                <div className="invalid-feedback">
                                    Apellido valido requerido.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="username" className="form-label"> Usuario </label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="text" className="form-control" id="username" placeholder="Usuario" required="" />
                                    <div className="invalid-feedback">
                                        Usuario requerido.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email <span className="text-muted">(Opcional)</span></label>
                                <input type="email" className="form-control" id="email" placeholder="Tu correo @example.com" />
                                <div className="invalid-feedback">
                                    Por favor ingrese un email valido para recibir su factura.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label"> Dirección </label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Calle " required="" />
                                <div className="invalid-feedback">
                                    Por favor ingresar una dirección.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address2" className="form-label"> direccion 2 <span className="text-muted">(Opcional)</span></label>
                                <input type="text" className="form-control" id="address2" placeholder="Departamento o Casa" />
                            </div>

                            <div className="col-md-5">
                                <label htmlFor="country" className="form-label"> Pais </label>
                                <select className="form-select" id="country" required="">
                                    <option value=""> Seleccionar... </option>
                                    <option> Argentina </option>
                                </select>
                                <div className="invalid-feedback">
                                    Por favor seleccione su pais.
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label"> Provincia </label>
                                <select className="form-select" id="state" required="">
                                    <option value=""> Seleccionar... </option>
                                    <option> La Rioja </option>
                                </select>
                                <div className="invalid-feedback">
                                    Provincias validas.
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="zip" className="form-label" > Codigo Postal </label>
                                <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Código Postal.
                                </div>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="same-address" />
                            <label className="form-check-label" htmlFor="same-address"> Dirección de facturación </label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="save-info" />
                            <label className="form-check-label" htmlFor="save-info"> Guardar mi informacion para futuras compras </label>
                        </div>

                        <hr className="my-4" />

                        <h4 className="mb-3"> Pagar </h4>

                        <div className="my-3">
                            <div className="form-check">
                                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                                <label className="form-check-label" htmlFor="credit"> Tarjeta de Credito </label>
                            </div>
                            <div className="form-check">
                                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                <label className="form-check-label" htmlFor="debit"> Tarjeta de Debito </label>
                            </div>
                            <div className="form-check">
                                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                <label className="form-check-label" htmlFor="paypal"> PayPal </label>
                            </div>
                        </div>

                        <div className="row gy-3">
                            <div className="col-md-6">
                                <label htmlFor="cc-name" className="form-label"> Tituar </label>
                                <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                <small className="text-muted"> Nombre completo como figura en la Tarjeta </small>
                                <div className="invalid-feedback">
                                    Nombre del Titular
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="cc-number" className="form-label"> Numero de tarjeta </label>
                                <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Numero de Tarjeta Requerido
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="cc-expiration" className="form-label"> Fecha de Vencimiento </label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Vencimiento Requerido
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Codigo de Seguridad Requerido
                                </div>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <button className="w-100 btn btn-outline-primary btn-lg" type="submit"> Terminar Compra </button>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
};

export default Checkout;
