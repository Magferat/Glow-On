import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
            })
    }, [])

    const handleDelete = id => {

        const confirmation = window.confirm('Are you sure, you want to delete this product?');

        if (confirmation) {
            const url = `http://localhost:5000/products/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log('hello')
                    if (data.deletedCount > 0) {
                        const restOrders = products.filter(order => order._id !== id);
                        setProducts(restOrders);
                    }
                })
        };
    }
    return (

        <div className="">

            <h1>Products {products.length}</h1>
            <div className="container mx-auto">
                <div className=" row  row-cols-sm-1 row-cols-md-1 row-cols-lg-3 g-4">
                    {
                        products.map(pd => <div
                            key={pd._id}
                            class="col" >
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
                                    <button
                                        className="bg-warning text-white px-3 py-1 rounded-pill border-0 "
                                        onClick={() => handleDelete(pd._id)}> Delete Product </button>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div></div>
        </div>
    );
};

export default ManageProducts;