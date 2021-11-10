import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

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
            product: product
        }
        // send to the server
        fetch('http://localhost:5000/orders', {
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
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])
    console.log(user)
    return (
        <div className="d-lg-flex col-sm-10">
            <div className=" col-sm-12 col-lg-6 mx-4">
                <div class="card">
                    <img src={product.img} class="card-img-top w-75 mx-auto" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        {/* <p class="card-text">{product.discription}</p> */}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Tk {product.price} </li>
                        <li class="list-group-item">{product.discription}</li>
                        <li class="list-group-item">{product.directions}</li>

                    </ul>
                    {/* <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div> */}
                </div>
            </div>
            <div className="col-sm-12 col-lg-6">
                <div className=" mt-lg-5 pt-5 px-3"><form
                    className=" d-flex flex-column "
                    onSubmit={handleOrderSubmit}>

                    <input

                        name="productName"
                        onBlur={handleOnBlur}
                        value={product.name}
                    />
                    <input
                        placeholder="Customer Name"

                        name="customerName"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                    />
                    <input
                        placeholder="Customer Email"
                        name="email"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                    />
                    <input
                        name="phone"
                        onBlur={handleOnBlur}
                        placeholder="Phone Number"
                    />
                    <textarea
                        name="address"
                        onBlur={handleOnBlur}
                        placeholder="Shipping Address"
                    />

                    <button type="submit" variant="contained">Submit</button>
                </form> </div>

            </div>
        </div>
    );
};

export default Purchase;