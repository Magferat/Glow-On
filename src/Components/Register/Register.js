import React from 'react';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

import Navber from '../NavBer/Navber';

const Register = () => {

    const { registerUser, error, userName, userEmail, userPassword } = useAuth();



    return (
        <div>
            <Navber />
            <div className="col-6">
                <form onSubmit={registerUser}>

                    <div class="mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>

                        <input
                            onBlur={userName}
                            name="name"
                            type="text" className="form-control" id="inputName" placeholder="Your Name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input
                            onBlur={userEmail}

                            type="email" name="email"
                            class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input
                            onBlur={userPassword}
                            type="password" name="password"
                            class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit">Submit</button>
                    {error}

                </form>
                <NavLink to="/login">Already an user? Click Here!</NavLink>
            </div>
            <div className="col-6">
                img
            </div>

        </div>
    );
};

export default Register;