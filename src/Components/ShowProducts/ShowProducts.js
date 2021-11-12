import React from 'react';
import { Link } from 'react-router-dom';





const ShowProducts = (props) => {
    const { name, img, discription, price, _id, ratings } = props.product;
    return (

        <div class="col" >
            <div class="card px-1" style={{ width: '350px' }}>
                <img src={img} class="card-img-top w-50 mx-auto" alt="..." />
                <div class="card-body px-0 text-center">
                    <span class="fw-bold name-text">{name.slice(0, 22)}</span>
                    <br />
                    <p class="discription-text lh-1 mb-0">{discription.slice(0, 70)}</p>
                    {/* <StarRatings
                        rating={ratings}
                        starDimension="40px"
                        starSpacing="15px"
                    /> */}
                    <small class="name-text">{ratings} </small>
                    <br />
                    <small class="name-text fw-bold">Tk {price}</small>
                    <br />  <button className="btn-light">
                        <Link
                            className="order-click fw-bold text-white"
                            to={`/purchase/${_id}`}>
                            Buy Now  </Link> <i className="fas fa-shopping-basket"></i></button>

                </div>
            </div>
        </div>

    );
};

export default ShowProducts;