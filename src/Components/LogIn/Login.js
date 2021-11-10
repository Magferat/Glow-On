import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navber from '../NavBer/Navber';

const Login = () => {
    const { emailPassLogin, signInWithGoogle, error, isLoading } = useAuth();
    const [userInfo, setUserInfo] = useState({});
    const location = useLocation();
    const history = useHistory();

    const handleOnblur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserInfo = { ...userInfo }
        newUserInfo[field] = value;
        setUserInfo(newUserInfo)
    }
    const emailPassLoginOnSubmit = e => {
        emailPassLogin(userInfo.email, userInfo.password, location, history);
        e.preventDefault();
    }
    const handleGooglelogIn = () => {
        signInWithGoogle(location, history)

    }


    return (
        <div>
            <Navber />
            <div className="col-6">
                <form onSubmit={emailPassLoginOnSubmit}>
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

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <div
                    onClick={handleGooglelogIn}
                    className="btn btn-light">Google</div>
                <NavLink to="/register">Not an user ? Click here to Register </NavLink>
            </div>
            <div className="col-6">
                img
            </div>

        </div>
    );
};

export default Login;