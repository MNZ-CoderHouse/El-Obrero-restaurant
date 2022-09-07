import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {delItem} from './redux/actions/index';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const state = useSelector((state) => state.addItem);
    const dispatch = useDispatch();
    const handleClose = (item) => {
        dispatch(delItem(item))
    }
    
    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=> handleClose(cartItem)} className="btn-close float-end" aria-label='Cerrar'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img className='rounded-2' src={cartItem.image} alt={cartItem.name} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4"> 
                            <h3>{cartItem.name}</h3>
                            <p className='lead fw-bold'>$ {cartItem.price} </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <div className="row">
                        <img src="/assets/empty2.png" alt="Empty-Cart" height="500px" width="300px" />
                        <h3 className='text-center'> Tu Carrito esta bacio </h3>
                    </div>
                </div>
            </div>
        )
    }

    const button = () => {
        return (
            <div className="container py-4">
                <div className="row">
                    <NavLink to= "/checkout" className="btn btn-outline-secondary mb-5 w-25 mx-auto"> Procesar tu compra </NavLink>
                </div>
            </div>
        )
    }

    return ( 
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}{button()}
            {/* {state.length !== 0 && button()} funcion completa de button no eredada. */}
        </>
    )
}

export default Cart;