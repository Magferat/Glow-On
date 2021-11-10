import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navber from '../NavBer/Navber';

const ExploreProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
            })
    }, [])

    return (

        <div className="">
            <Navber />
            <h1>Products {products.length}</h1>
            <div className="container mx-auto">
                <div className=" row  row-cols-sm-1 row-cols-md-1 row-cols-lg-3 g-4">
                    {
                        products.map(pd => <div class="col" >
                            <div class="card px-1" style={{ width: '350px' }}>
                                <img src={pd.img} class="card-img-top w-50 mx-auto" alt="..." />
                                <div class="card-body px-0 text-center">
                                    <span class="fw-bold name-text">{pd.name.slice(0, 22)}</span>
                                    <br />
                                    <p class="discription-text lh-1 mb-0">{pd.discription.slice(0, 70)}</p>

                                    <small class="name-text">{pd.ratings} </small>
                                    <br />
                                    <small class="name-text fw-bold">Tk {pd.price}</small>
                                    <br />
                                    <button className="btn-light">
                                        <Link
                                            className="order-click fw-bold text-white"
                                            to={`/purchase/${pd._id}`}>
                                            Buy Now  </Link> <i className="fas fa-shopping-basket"></i></button>


                                </div>
                            </div>
                        </div>
                        )
                    }
                </div></div>
        </div>
    );
};

export default ExploreProducts;