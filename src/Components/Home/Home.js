import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Header from '../Header/Header';
import Navber from '../NavBer/Navber';

const Home = () => {
    return (
        <div>
            <Navber />
            <Header />
            <h1>Hi from home</h1>
            <AllProducts />
        </div>
    );
};

export default Home;