import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';

const DashBoard = () => {
    return (
        <div>
            <Header />
            <h1>Hi from dashboard</h1>
            <Link to='/addproducts'>AddProducts </Link>
            <Link to='/userOrders/:email'>My Orders </Link>
            <Link to='/home'>Home </Link>


        </div>
    );
};

export default DashBoard;