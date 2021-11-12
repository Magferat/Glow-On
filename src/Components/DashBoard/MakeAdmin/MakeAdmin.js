import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmin = e => {
        const user = { email };
        fetch('https://thawing-ridge-68503.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // console.log(data);
                    alert('User upgrade to Admin');
                }
            })

        e.preventDefault()
    }

    return (
        <div className="">
            <h2 className="text-center ">Make an Admin</h2>
            <div className="container col-8">
                <form

                    onSubmit={handleAdmin}>
                    <input
                        onBlur={handleOnBlur}
                        required
                        name="email"
                        type="email" className="form-control border-1 border-danger mb-3" id="exampleFormControlInput1" placeholder="userName@example.com" />

                    <button
                        className="px-3 btn border-danger border-2 fw-bold"
                        type="submit">Make Admin</button>
                </form>


            </div>
            {/* <div className="col">
                <img
                    className="img-fluid"
                    src="https://image.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40282.jpg" alt="" />

            </div> */}
        </div>
    );
};

export default MakeAdmin;