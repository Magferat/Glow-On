import React from 'react';
import useAuth from '../../hooks/useAuth';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

// import Navber from '../NavBer/Navber'

const Register = () => {

    const { registerUser, error, userName, userEmail, userPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const register = e => {
        registerUser(location, history);
        e.preventDefault();
    }

    return (
        <div>
            {/* <Navber /> */}
            <h2 className="text-center mt-2">Register Here</h2>

            <div className="container d-lg-flex">
                <div className="col-6 mx-2 px-3 mt-5">
                    <form onSubmit={register}>

                        <div className="mb-3">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>

                            <input
                                onBlur={userName}
                                name="name"
                                type="text" className="form-control" id="inputName" placeholder="Your Name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                onBlur={userEmail}

                                type="email" name="email"
                                className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                onBlur={userPassword}
                                type="password" name="password"
                                className="form-control" id="exampleInputPassword1" />
                            <div id="emailHelp" className="form-text">

                                Never share your Password with anyone else.</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Register <i class="fas fa-sign-in-alt"></i></button>
                        <p> {error}</p>

                    </form>
                    <NavLink
                        className="link"
                        to="/login">Allready an user ? <span className="text-primary"> Login</span> </NavLink>                </div>
                <div className="col-6">
                    <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg" alt="" />
                </div>

            </div></div>
    );
};

export default Register;