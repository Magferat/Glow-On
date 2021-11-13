import React from 'react';
import { Link } from 'react-router-dom';
import DynamicRatings from '../DynamicRatings/DynamicRatings';





const ShowProducts = (props) => {
    const { name, img, discription, price, _id, ratings } = props.product;
    return (

        <div className="col" >
            <div className="card shadow-lg h-100" style={{ width: '350px' }}>
                <img src={img} className="card-img-top w-50 mx-auto" alt="..." />
                <div className="card-body px-3 text-center">
                    <span className="fw-bold name-text">{name.slice(0, 22)}</span>
                    <br />
                    <p className="discription-text lh-1 mb-0">{discription.slice(0, 70)}</p>
                    <small className="name-text text-danger fw-bold">Tk. {price}</small> <br />

                    <div className="d-flex justify-content-center"><DynamicRatings
                        value={ratings}
                    ></DynamicRatings>

                    </div>
                    <small className="text-center fw-bold"> ({ratings}/5)</small>

                    <br />  <button className="mt-1 border border-0 px-3 py-1 color1 bg-danger">
                        <Link
                            className="order-click link fw-bold text-white"
                            to={`/purchase/${_id}`}>
                            Purchase <i className="fas fa-shopping-cart"></i> </Link> </button>

                </div>
            </div>
        </div >


    );
};

export default ShowProducts;