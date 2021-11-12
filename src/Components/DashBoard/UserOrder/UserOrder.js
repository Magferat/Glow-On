import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const UserOrder = () => {
    const [myOrders, setMyOrders] = useState([]);

    const { user } = useAuth();
    const email = user.email;

    useEffect(() => {
        fetch(`https://thawing-ridge-68503.herokuapp.com/userOrders/${email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [email])





    const handleDelete = id => {

        const confirmation = window.confirm('Are you sure, you want to delete?');

        if (confirmation) {
            const url = `https://thawing-ridge-68503.herokuapp.com/orders/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log('hello')
                    if (data.deletedCount > 0) {
                        const restOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(restOrders);
                    }
                })
        };
    }

    return (
        <div className="addItem-bg">
            <h2 className="text-center text-white pt-3">Your Orders</h2>

            <div className="row container mx-auto row-cols-lg-1 row-cols-md-1 g-4">
                {
                    myOrders.map(order => <div
                        key={order._id}
                        className="col">
                        <div className="card mb-3 col-lg-6">
                            <div className="row  g-0">
                                <div className="col-md-4 p-2">
                                    <img src={order.product.img} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-title name-text fw-light lh-1">
                                            {order.product.name}</p>
                                        <p className="card-text name-text ">
                                            <span className="fw-bold   lh-1">Price :</span>Tk{order.product.price}<br />
                                            <span className="fw-bold  "> buyer Name :</span>  {order.customerName}
                                            <br />
                                            <span className="fw-bold "> Address :</span>  {order.address}
                                            <br />

                                        </p>
                                        <button
                                            className="btn name-text bgcolor1 fw-bold "
                                            onClick={() => handleDelete(order._id)}> Cancel Order </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default UserOrder;