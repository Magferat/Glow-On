import React, { useEffect, useState } from 'react';

const ManageOrders = () => {


    const [orders, setOrders] = useState([]);
    const [isShipped, setIsShipped] = useState(false);

    useEffect(() => {
        fetch('https://thawing-ridge-68503.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isShipped])

    const handleDelete = id => {

        const confirmation = window.confirm('Are you sure, you want to delete an order?');
        if (confirmation) {
            const url = `https://thawing-ridge-68503.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const restOrders = orders.filter(order => order._id !== id);
                        setOrders(restOrders);
                    }
                })
        };
    }

    const handleStatus = id => {
        const url = `https://thawing-ridge-68503.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Status changed to "Shipped" ');
                    setIsShipped(true)

                }
            })
    }
    // console.log(orders)

    return (
        <div className='table-banner container-fluid pro'>
            <h1 className="text-danger text-center">Manage Orders</h1>
            <hr />
            <table className="table container   px-5">
                <thead className="fs-5 font-monospace">
                    <tr>
                        <th scope="col"> * </th>
                        <th scope="col">Customer Info</th>
                        <th scope="col">Order Details</th>
                        <th scope="col">Status</th>

                    </tr>
                </thead>
                <tbody className="fw-light lh-1">

                    {
                        orders.map(order => <tr
                            key={order._id}
                        >
                            <th> {orders.indexOf(order) + 1}. </th>
                            <td> {order.customerName} <br />{order.address} <br /> {order.phone} </td>
                            <td> {order.product.name} <br />
                                Price : Tk{order.product.price}</td>
                            <td> <button
                                onClick={() => handleStatus(order._id)}
                                className="border-0 bg-warning mb-3 py-1 px-2"
                            >{order.status} </button> <br /> <button
                                className="border-0 bg-danger px-3 py-1"
                                onClick={() => handleDelete(order._id)}
                            >Delete</button> </td>
                        </tr>)
                    }


                </tbody>
            </table>



        </div>
    );
};

export default ManageOrders;