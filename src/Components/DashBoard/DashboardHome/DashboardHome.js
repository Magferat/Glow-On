import React from 'react';
import useAuth from '../../../hooks/useAuth';
import ManageOrders from '../ManageOrders/ManageOrders';
import Pay from '../Pay/Pay';

const DashboardHome = () => {
    const { admin } = useAuth()

    return (
        <div>
            {
                admin && <ManageOrders />
            }
            {
                !admin && <Pay />
            }
        </div>
    );
};

export default DashboardHome;