import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {

        return <div className="mx-auto">

            <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? children :
                    <Redirect
                        to={{
                            pathname: "/logIn",
                            state: { from: location }
                        }}
                    ></Redirect>

            }
        >

        </Route>
    );
};

export default PrivateRoute;