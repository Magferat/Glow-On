import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import Navber from '../NavBer/Navber';

const Login = () => {
    const { emailPassLogin, signInWithGoogle, error } = useAuth();
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
            {/* <Navber /> */}
            <h2 className="text-center mt-2">User Login</h2>
            <div className="container d-lg-flex">

                <div className="col-6 mx-2 px-3 mt-5">
                    <form onSubmit={emailPassLoginOnSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                onBlur={handleOnblur}

                                type="email" name="email"
                                className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                onBlur={handleOnblur}
                                type="password" name="password"
                                className="form-control" id="exampleInputPassword1" />
                            <div id="emailHelp" className="form-text">Never share your Password with anyone else.</div>
                        </div>

                        <button type="submit" className="btn btn-primary">Login <i className="fas fa-sign-in-alt"></i></button>
                        <p>{error}</p>
                    </form>
                    <NavLink
                        className="link"
                        to="/register">Not an user ? <span className="text-primary"> Register</span> </NavLink><br /><button
                            onClick={handleGooglelogIn}
                            className="btn btn-danger text-white mt-1">Continue With Google <i className="fab fa-google-plus-g"></i></button>
                </div>
                <div className="col-6">
                    <img
                        className="img-fluid"
                        src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="" />
                </div>
            </div>


        </div>
    );
};

export default Login;