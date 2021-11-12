import React from 'react';

const AboutUs = () => {
    return (
        <div id="about" className="about pro my-5">
            <h1 className="text-center color2 fw-light">About Us</h1>
            <hr />
            <div className="container mt-5 mx-auto d-lg-flex">
                <div className="container text-end">
                    <p className="p-2 my-lg-5 fst-italic"> Welcome to GlowOn, the official and Sole distributor of some of the best and most famous brands from all over Europe and USA. Which means you can find Authentic and Original cosmetics products of these brands Freshly Manufactured at the best price only from GlowOn retail stores, distribution points and online store in Bangladesh.
                        <br />
                        Providing our customers with the best quality products and service is a priority for us. The unique range of products and brands along with great & intimate customer service make BBB the best cosmetics store in Bangladesh. <br />

                        Buy directly from trusted sources of BBB to avail 100% Authentic products from our Exclusive brands</p>
                </div>
                <div className="container">
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;