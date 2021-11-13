import React, { useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState({})


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviews };
        newInfo[field] = value;
        setReviews(newInfo);
    }

    const submitReview = e => {
        e.preventDefault();
        // const review = {
        //     ...reviews

        // }
        // const reviews = { ...reviews }

        // send to the server
        fetch('https://thawing-ridge-68503.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your Review has been Placed');
                }
            });

    }

    return (
        <>
            <div className="div review-bg">
                <div className="col-6 px-5 mx-auto ">
                    <h2 className="text-center text-white">Write A Review</h2>
                    <form
                        className="p-2"
                        onSubmit={submitReview}
                    >
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-white">
                                User Name</label>
                            <input
                                onBlur={handleOnBlur}
                                name="userName"
                                required
                                type="text" className="form-control border-dark" id="exampleFormControlInput1" placeholder="User Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-white">Email address</label>
                            <input
                                onBlur={handleOnBlur}
                                required
                                name="email"
                                type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-white">
                                Rating</label>
                            <input
                                onBlur={handleOnBlur}
                                name="rate"
                                type="number"
                                min="0" max="5" step="any"
                                className="form-control" id="exampleFormControlInput1" placeholder="Rating(0-5)" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">
                                Review</label>
                            <textarea
                                name="post"
                                onBlur={handleOnBlur}
                                className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <button
                                className="btn bgcolor1 fw-bold"
                                type="submit">Submit</button>
                        </div>
                    </form></div>

            </div>
        </>
    );
};

export default Reviews;