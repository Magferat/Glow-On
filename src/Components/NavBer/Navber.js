import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Navber = () => {
    const { user, logout } = useAuth({});

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light nav-bg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand text-white fw-bold fs-4" to="/home">GlowOn</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
                            <li className="nav-item">
                                <HashLink className="nav-link active" aria-current="page" to="/home">Home</HashLink>
                            </li>
                            {
                                user?.email ? <li className="nav-item">
                                    <div
                                        onClick={logout}
                                        className="btn btn-light"> {user.displayName} Logout</div>
                                </li> : <li className="nav-item">
                                    <HashLink className="nav-link active" aria-current="page" to="/login">Login</HashLink>
                                </li>
                            }

                            <li className="nav-item">
                                <HashLink className="nav-link active" aria-current="page" to="/dashboard">Dashboard</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link active" aria-current="page" to="/explore">Explore</HashLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;