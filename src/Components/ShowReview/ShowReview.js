import React, { useEffect, useState } from 'react';
import DynamicRatings from '../DynamicRatings/DynamicRatings';

const ShowReview = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setReviews(data)
            })
    }, [])

    return (
        <div className="">

            <h1>reviews {reviews.length}</h1>
            <div class="row container mx-auto row-cols-1 row-cols-md-2 g-4">
                {
                    reviews.map(review => <div
                        review={review._id}
                        class="col">
                        <div class="card border-success mb-3" >
                            <div class="card-header bg-transparent border-success">
                                {review.userName}
                            </div>
                            <div class="card-body">
                                <h6 class="card-title">{review.email}</h6>
                                <p class="card-text">{review.post}</p>
                            </div>
                            <div class="card-footer bg-transparent border-success">


                                <DynamicRatings
                                    value={review.rate}
                                ></DynamicRatings>
                                {review.rate}</div>
                        </div>
                    </div>)
                }



            </div>
        </div>
    );
};

export default ShowReview;