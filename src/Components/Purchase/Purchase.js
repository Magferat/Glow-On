import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import DynamicRatings from '../DynamicRatings/DynamicRatings';
import Footer from '../Footer/Footer';
import Navber from '../NavBer/Navber';

const Purchase = () => {
    const { user } = useAuth();
    const [product, setProduct] = useState([])
    const initialInfo = { customerName: user.displayName, email: user.email }

    const [orderInfo, setOrderInfo] = useState(initialInfo)
    const { productId } = useParams();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);

    }
    const handleOrderSubmit = e => {
        e.preventDefault();

        const order = {
            ...orderInfo,
            product: product,
            status: "Pending"
        }
        // send to the server
        fetch('https://thawing-ridge-68503.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your Order has been placed');

                }
            });

    }
    useEffect(() => {
        fetch(`https://thawing-ridge-68503.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])

    return (
        <>
            <Navber />
            <div className="d-lg-flex col-sm-10">
                <div className="col-sm-12 col-lg-6 ">
                    <div className=" mt-lg-5 pt-5 mx-3 add-item">
                        <h5 className="text-center color2 mb-3">To Purchase Fill This Form</h5>
                        <form
                            className="px-2 d-flex flex-column "
                            onSubmit={handleOrderSubmit}>

                            <input
                                required
                                name="productName"
                                onBlur={handleOnBlur}
                                value={product.name}
                            />
                            <input
                                placeholder="Customer Name"

                                name="customerName"
                                onBlur={handleOnBlur}
                                defaultValue={user.displayName}
                                required
                            />
                            <input
                                placeholder="Customer Email"
                                name="email"
                                onBlur={handleOnBlur}
                                defaultValue={user.email}
                                required
                            />
                            <input
                                required
                                name="phone"
                                onBlur={handleOnBlur}
                                placeholder="Phone Number"
                            />
                            <textarea
                                required
                                name="address"
                                onBlur={handleOnBlur}
                                placeholder="Shipping Address"
                            />

                            <input className="w-50 mx-auto bgcolor1 btn fw-bold fs-5" type="submit" />
                        </form> </div>

                </div>
                <div className=" col-sm-12 col-lg-6 mx-4 mt-3 mb-5">
                    <div className="card ">
                        <img src={product.img} className="card-img-top w-50 mx-auto" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title lh-1">{product.name}</h5>

                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"> <span className="fw-bold color1">  Price :</span> Tk {product.price} </li>
                            <li className="list-group-item d-flex justify-content-center">

                                <DynamicRatings
                                    value={product.ratings}
                                ></DynamicRatings>
                                ({product.ratings}/5)
                            </li>
                            <li className="list-group-item name-text"><span className="fw-bold fs-5 color1">  Discription </span> <br />{product.discription}</li>
                            <li className="list-group-item name-text"><span className="fw-bold fs-5 color1"> How to use</span> <br />{product.directions}</li>

                        </ul>

                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Purchase;