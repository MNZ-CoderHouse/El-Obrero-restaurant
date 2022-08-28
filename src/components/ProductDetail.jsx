import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import DATA from '../DATA'


const ProductDetail = () => {
    const [ cartBtn, setCartBtn ] = useState("Añadir al Carrito")
    const proid = useParams();
    const proDetail = DATA.filter(x=>x.id == proid.id);
    const product = proDetail[0];
    console.log(product);

    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.image}  alt={product.name}  height="400px" width="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold"> {product.name} </h1>
                        <hr />
                        <h2 className="my-4"> $ {product.price} </h2>
                        <p className="lead"> {product.description} </p>
                        <div className="col-md-12 d-flex flex-column justify-content-center">
                            <NavLink to='/cart' className="btn btn-outline-primary my-2 px-4 py-2"> Ir al Carrito </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProductDetail;