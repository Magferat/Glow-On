import React, { useEffect, useState } from 'react';
import ShowProducts from '../ShowProducts/ShowProducts';

const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://thawing-ridge-68503.herokuapp.com/products")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
            })
    }, [])

    const sixProducts = products.slice(0, 6)
    // console.log(sixProducts)

    return (
        <div className="mt-5 pro">
            <h1 className="text-center color2 mt-5 fw-light">Featured Face Creams </h1>
            <hr />
            <div className="container mt-5 mx-auto">
                <div className=" row  row-cols-sm-1 row-cols-md-1 row-cols-lg-3 g-4">
                    {
                        sixProducts.map(product => <ShowProducts
                            key={product._id}
                            product={product}
                        ></ShowProducts>)
                    }

                </div></div>
        </div>
    );
};

export default AllProducts;