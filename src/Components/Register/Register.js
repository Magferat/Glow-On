import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { NavLink, useHistory } from 'react-router-dom';

import Navber from '../NavBer/Navber';

const Register = () => {
    const [userInfo, setUserInfo] = useState({});
    const history = useHistory();
    const { user, registerUser, error, isLoading } = useAuth();

    const handleOnblur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserInfo = { ...userInfo }
        newUserInfo[field] = value;
        setUserInfo(newUserInfo)
    }
    const userRegisterOnSubmit = e => {
        registerUser(userInfo.email, userInfo.password, userInfo.name, history);

        e.Prevent.default()
    }

    return (
        <div>
            <Navber />
            <div className="col-6">
                <form onSubmit={userRegisterOnSubmit}>

                    <div class="mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>

                        <input
                            onBlur={handleOnblur}
                            type="text" className="form-control" id="inputName" placeholder="Your Name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input
                            onBlur={handleOnblur}

                            type="email" name="email"
                            class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input
                            onBlur={handleOnblur}
                            type="password" name="password"
                            class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit">Submit</button>
                    {user?.email && alert('User Created successfully!')}
                    {error && alert({ error })}

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