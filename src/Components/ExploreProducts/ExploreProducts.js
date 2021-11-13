import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DynamicRatings from '../DynamicRatings/DynamicRatings';
import Footer from '../Footer/Footer';
import Navber from '../NavBer/Navber';

const ExploreProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://thawing-ridge-68503.herokuapp.com/products")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
            })
    }, [])

    return (

        <div className="pro">
            <Navber />
            <h1 className="text-danger fw-light text-center pt-5 mt-5">SHOP BY YOUR SKIN CONCERN</h1> <hr />
            <div className="container mt-5 mx-auto">
                <div className=" row  row-cols-sm-1 row-cols-md-1 row-cols-lg-3 g-4">
                    {
                        products.map(pd => <div
                            key={pd._id}
                            className="col" >
                            <div className="card shadow-lg h-100" style={{ width: '350px' }}>
                                <img src={pd.img} className="card-img-top w-50 mx-auto" alt="..." />
                                <div className="card-body px-3 text-center">
                                    <span className="fw-bold name-text">{pd.name.slice(0, 22)}</span>
                                    <br />
                                    <p className="discription-text lh-1 mb-0">{pd.discription.slice(0, 70)}</p>
                                    <small className="name-text text-danger fw-bold">Tk. {pd.price}</small> <br />

                                    <div className="d-flex justify-content-center"><DynamicRatings
                                        value={pd.ratings}
                                    ></DynamicRatings>

                                    </div>
                                    <small className="text-center fw-bold"> ({pd.ratings}/5)</small>

                                    <br />  <button className="mt-1 border border-0 px-3 py-1 color1 bg-danger">
                                        <Link
                                            className="order-click link fw-bold text-white"
                                            to={`/purchase/${pd._id}`}>
                                            Purchase <i className="fas fa-shopping-cart"></i> </Link> </button>

                                </div>
                            </div>
                        </div>
                        )
                    }
                </div></div> <Footer />
        </div>
    );
};

export default ExploreProducts;