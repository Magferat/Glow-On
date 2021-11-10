import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const UserOrder = () => {
    const [myOrders, setMyOrders] = useState([]);

    const { user } = useAuth();
    const email = user.email;

    useEffect(() => {
        fetch(`http://localhost:5000/userOrders/${email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [email])





    const handleDelete = id => {

        const confirmation = window.confirm('Are you sure, you want to delete?');

        if (confirmation) {
            const url = `http://localhost:5000/orders/${id}`;

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
        <div className="">
            <h1 className="text-center ">My Orders  </h1>
            <div className="row container mx-auto row-cols-lg-2 row-cols-md-1 g-4">
                {
                    myOrders.map(order => <div
                        key={order._id}
                        className="col ">
                        <div className="card mb-3 border-warning border-3">
                            <div className="row  g-0">
                                <div className="col-md-4 p-2">
                                    <img src={order.product.img} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">
                                            {order.product.name}</h5>
                                        <p className="card-text">
                                            <span className="fw-bold">Price :</span>Tk{order.product.price}<br />
                                            <span className="fw-bold"> Customer Name :</span>  {order.customerName}
                                            <br />
                                            <span className="fw-bold"> Address :</span>  {order.address}
                                            <br />

                                        </p>
                                        <button
                                            className="bg-warning text-white px-3 py-1 rounded-pill border-0 "
                                            onClick={() => handleDelete(order._id)}> Delete Order </button>

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