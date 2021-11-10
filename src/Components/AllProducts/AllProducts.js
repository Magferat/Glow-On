import React, { useEffect, useState } from 'react';
import ShowProducts from '../ShowProducts/ShowProducts';

const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
            })
    }, [])

    const sixProducts = products.slice(0, 6)
    // console.log(sixProducts)

    return (
        <div className="">
            <h1>Products {sixProducts.length}</h1>
            <div className="container mx-auto">
                <div className=" row  row-cols-sm-1 row-cols-md-1 row-cols-lg-3 g-4">
                    {
                        sixProducts.map(pd => <ShowProducts
                            key={pd._id}
                            product={pd}
                        ></ShowProducts>)
                    }
                </div></div>
        </div>
    );
};

export default AllProducts;