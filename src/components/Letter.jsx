import React,{useEffect,useState} from 'react';
import DATA from '../DATA';
import {NavLink} from 'react-router-dom';

const Letter = () => {
    const [filter, setFilter] = useState(DATA);
  

    const filterProduct = (cat) => {
        const updatedList = DATA.filter((x)=> x.category === cat);
        setFilter(updatedList);
    }
    

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
                    <button className="btn btn-outline-primary me-2" onClick={()=>setFilter(DATA)}> Todos </button>
                    <button className="btn btn-outline-primary me-2" onClick={()=>filterProduct("drink")}> Drink </button>
                    <button className="btn btn-outline-primary me-2" onClick={()=>filterProduct("fit")}> Fitnes </button>
                    <button className="btn btn-outline-primary me-2" onClick={()=>filterProduct("itali")}> Itali </button>
                    <button className="btn btn-outline-primary me-2" onClick={()=>filterProduct("regional")}> Regional </button>
                </div>

                {filter.map((item) => {

                    return (
                        <div className="col-md-3 mb-4 ">
                            <div className="card my-5 py-4" key={item.id} style={{ Width: "18rem" }} >
                                <img src={item.image} className="card-img-top" alt={item.name} height= '300px' />
                                <div className="card-body text-center">
                                    <h5 className="card-title"> {item.name}</h5> 
                                    <p className='lead'> $ {item.price} </p>
                                    <NavLink to={`/product/${item.id}`} className={"btn btn-outline-primary"}> Buy now </NavLink>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container py-5  ">
                <div className="row">
                    <div className="col-12 text-center">
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {<ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Letter