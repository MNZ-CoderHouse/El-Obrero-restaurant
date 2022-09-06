import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const CartBtn = () => {
    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <NavLink to='/Cart' className='btn btn-outline-primary ms-2'>
                <span className='fa fa-shopping-cart me-1'></span> Carrito ({state.length})
            </NavLink>
        </>
    );
}

export default CartBtn;
