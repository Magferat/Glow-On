import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Header from '../Header/Header';
import Navber from '../NavBer/Navber';
import ShowProducts from '../ShowProducts/ShowProducts';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
            <Navber />
            <Header />
            <h1>Hi from home</h1>
            <AllProducts />
            <ShowReview />
        </div>
    );
};

export default Home;