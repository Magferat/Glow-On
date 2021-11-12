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
        fetch('http://localhost:5000/reviews', {
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
                    console.log(data)
                }
            });

    }

    return (
        <>
            <form
                onSubmit={submitReview}
            >
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        User Name</label>
                    <input
                        onBlur={handleOnBlur}
                        name="userName"
                        required
                        type="text" class="form-control" id="exampleFormControlInput1" placeholder="User Name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input
                        onBlur={handleOnBlur}
                        required
                        name="email"
                        type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Rating</label>
                    <input
                        onBlur={handleOnBlur}
                        name="rate"
                        type="number"
                        min="0" max="5" step="any"
                        class="form-control" id="exampleFormControlInput1" placeholder="Rating(0-5)" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                        Review</label>
                    <textarea
                        name="post"
                        onBlur={handleOnBlur}
                        class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
};

export default Reviews;