import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://thawing-ridge-68503.herokuapp.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    const handleDelete = id => {

        const confirmation = window.confirm('Are you sure, you want to delete this product?');

        if (confirmation) {
            const url = `https://thawing-ridge-68503.herokuapp.com/products/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const restOrders = products.filter(order => order._id !== id);
                        setProducts(restOrders);
                    }
                })
        };
    }
    return (

        <div className="pro mb-5">

            <h2 className=" text-center my-3 text-danger">Manage Products</h2>
            <hr />
            <h5 className=" text-center my-3">Available Products : {products.length}</h5>
            <div className="container mx-auto row row-cols-sm-1 row-cols-md-1 row-cols-lg-3 g-4">
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

                                <button
                                    onClick={() => handleDelete(pd._id)}
                                    className="mt-1 border border-0 px-3 py-1 text-white bg-danger">

                                    Delete </button>

                            </div>
                        </div>
                    </div>
                    )
                }
                <div className="col">
                    <div className="card h-100 border border-1 manage-bg">
                        <h1 className="text-center my-auto text-white">
                            <Link
                                className="link text-white"
                                to="/dashboard/addproducts">Add <br /> Products <br />
                                + </Link>
                        </h1>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default ManageProducts;



