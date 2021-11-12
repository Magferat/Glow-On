import React from 'react';
import AboutUs from '../About Us/AboutUs';
import AllProducts from '../AllProducts/AllProducts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navber from '../NavBer/Navber';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
            <Navber />
            <Header />

            <AllProducts />
            <AboutUs />
            <ShowReview />
            <Footer />
        </div>
    );
};

export default Home;