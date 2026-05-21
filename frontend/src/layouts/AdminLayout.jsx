import {

    Outlet,
    NavLink

} from "react-router-dom";


const AdminLayout = () => {

    return (

        <div className="flex min-h-screen">


            {/* SIDEBAR */}

            <div className="w-[300px] bg-blue-900 text-white p-10">

                <h1 className="relative left-10 top-5 text-4xl font-bold mb-10">

                    DriveEase

                </h1>


                <div className="relative left-20 top-20 flex flex-col gap-5 scale-125">


                    <NavLink
                        to="/admin/dashboard"
                    >

                        DASHBOARD

                    </NavLink>


                    <NavLink
                        to="/admin/vehicles"
                    >

                        VEHICLES

                    </NavLink>

                    <NavLink
                        to="/admin/customers"
                    >

                        CUSTOMERS

                    </NavLink>

                    <NavLink
                        to="/admin/bookings"
                    >

                        BOOKINGS

                    </NavLink>

                    <NavLink
                        to="/admin/reservations"
                    >

                        RESERVATIONS

                    </NavLink>

                    <NavLink
                        to="/admin/employees"
                    >

                        EMPLOYEES

                    </NavLink>

                    <NavLink
                        to="/admin/branches"
                    >

                        BRANCHES

                    </NavLink>

                    <NavLink
                        to="/admin/maintenance"
                    >

                        MAINTENANCE

                    </NavLink>

                    <NavLink
                        to="/admin/payments"
                    >

                        PAYMENTS

                    </NavLink>

                    <NavLink
                        to="/"
                    >

                        LOG OUT

                    </NavLink>


                </div>
            </div>


            {/* PAGE */}

            <div className="flex-1 p-10">

                <Outlet />

            </div>

        </div>

    );

};

export default AdminLayout;