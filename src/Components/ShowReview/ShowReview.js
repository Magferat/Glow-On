import React, { useEffect, useState } from 'react';
import DynamicRatings from '../DynamicRatings/DynamicRatings';

const ShowReview = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("https://thawing-ridge-68503.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setReviews(data)
            })
    }, [])

    return (
        <div id="reviews" className="pro mt-5">

            <h1 className="color2 fw-light text-center my-4"> WHAT PEOPLE SAY ABOUT US </h1> <hr />
            <div className="row container mx-auto row-cols-ms-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    reviews.map(review => <div
                        key={review._id}
                        className="col">
                        <div className="card mb-3 review-card" >
                            {/* <div className="card-header bg-transparent border-success">
                                
                            </div> */}
                            <div className="card-body">
                                <img src="https://cdn-icons-png.flaticon.com/512/2/2997.png" alt="" />
                                {/* <h6 className="card-title">{review.email}</h6> */}
                                <p className="card-text fst-italic">{review.post}</p>
                            </div>
                            <div className="card-footer p-0 footer-bg border-light">
                                <div className="fs-6 fw-bold text-center">{review.userName}</div>
                                <p className="text-center fw-bold mb-0"> ({review.rate}/5)</p>
                                <div className="d-flex justify-content-center"><DynamicRatings
                                    value={review.rate}
                                ></DynamicRatings>

                                </div>

                            </div>
                        </div>
                    </div>)
                }



            </div>
        </div>
    );
};

export default ShowReview;