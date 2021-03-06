import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    //
    return (
        <div className="header-bg">
            <div className=" text-end text-white py-5 px-4 ms-auto">
                <h6 className="font-monospace">CLEAN BEAUTY
                </h6>
                <h1>GlowOn <br />
                    Secret Of Your Beauty</h1>
                <h2 className="font-monospace">
                    Daily Essential</h2>
                <button type="button" className="btn btn-light">
                    <Link className="link" to="/explore">Shop Now</Link>
                </button>


            </div>

        </div>
    );
};

export default Header;