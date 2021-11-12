import React from 'react';

const Footer = () => {
    return (
        <div className="bg-footer mt-3 container-fluid">
            <div className="container text-white text-center py-5 d-lg-flex">
                <div className="container">
                    <div className="fs-6 mb-2">Information & Legal</div>
                    <p className="footer-text">
                        Terms of Service <br />
                        Privacy Policy <br />
                        About Us
                    </p>
                </div>
                <div className="container">
                    <div className="fs-6 mb-2">
                        Sign up for our newsletter
                    </div>
                    <p className="name-text footer-text">
                        Sign up to get the latest on sales, new releases and more…
                    </p>
                    <input placeholder="Email address" type="email" id="" />
                    <button className="bg-danger border-0 text-white" type="submit">Sign Up</button>

                </div>
                <div className="container">
                    <div className="fs-6 mb-2">Contact Us</div>
                    <p className='name-text text-center footer-text'>
                        Contact Us at : 01456789123 <br />
                        or Message Our Page Inbox <br />
                        or Email Us at : <br />
                        emailkorba@na.com For Any <br />
                        Queries
                    </p>
                </div>
            </div>
            <div className="container pb-2">  <p className=" border-top border-1 border-light text-white text-center">© 2021 GlowOn Beauty Care .</p>

            </div>
        </div>
    );
};

export default Footer;