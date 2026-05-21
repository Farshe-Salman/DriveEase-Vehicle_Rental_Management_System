import {

    useEffect,
    useState

} from "react";

import axios from "axios";


const AdminDashboard = () => {

    const [stats, setStats] = useState({
        totalVehicles: 0,
        totalCustomers: 0,
        totalRentals: 0,
        revenue: 0
    });

    const [recentRentals, setRecentRentals]
        = useState([]);

    const [recentReservations,
        setRecentReservations]
        = useState([]);

    // FETCH DATA

    useEffect(() => {

        fetchDashboardData();

    }, []);

    const fetchDashboardData = async () => {

        try {


            // STATS

            const statsRes = await axios.get(

                "http://localhost:8081/api/admin/dashboard"

            );


            // RECENT RENTALS

            const rentalRes = await axios.get(

                "http://localhost:8081/api/admin/recent-rentals"

            );


            // RECENT RESERVATIONS

            const reservationRes = await axios.get(

                "http://localhost:8081/api/admin/recent-reservations"

            );



            // SET STATES

            setStats(statsRes.data);

            setRecentRentals(rentalRes.data);

            setRecentReservations(

                reservationRes.data

            );

        }

        catch (err) {

            console.log(err);

        }

    };



    return (

        <div className="p-5">


            {/* TOP */}

            <div className="mb-10">

                <h1 className="text-5xl font-bold text-gray-900">

                    Dashboard

                </h1>

                <p className="text-gray-500 text-xl mt-3">

                    Welcome to DriveEase Admin Panel

                </p>

            </div>



            {/* STATS */}

            <div className="grid grid-cols-4 gap-8 mb-10">

                <div className="relative -top-10 bg-white border rounded-3xl p-8 shadow-sm">

                    <h2 className="text-gray-500 text-xl">

                        Total Vehicles

                    </h2>

                    <h1 className="text-5xl font-bold mt-5">

                        {stats.totalVehicles}

                    </h1>

                </div>



                {/* CUSTOMERS */}

                <div className="bg-white border rounded-3xl p-8 shadow-sm">

                    <h2 className="text-gray-500 text-xl">

                        Total Customers

                    </h2>

                    <h1 className="text-5xl font-bold mt-5">

                        {stats.totalCustomers}

                    </h1>

                </div>



                {/* RENTALS */}

                <div className="bg-white border rounded-3xl p-8 shadow-sm">

                    <h2 className="text-gray-500 text-xl">

                        Total Rentals

                    </h2>

                    <h1 className="text-5xl font-bold mt-5">

                        {stats.totalRentals}

                    </h1>

                </div>



                {/* REVENUE */}

                <div className="bg-white border rounded-3xl p-8 shadow-sm">

                    <h2 className="text-gray-500 text-xl">

                        Revenue

                    </h2>

                    <h1 className="text-5xl font-bold mt-5">

                        ৳ {stats.revenue}

                    </h1>

                </div>

            </div>



            {/* TABLES */}

            <div className="grid grid-cols-2 gap-8">


                {/* RECENT RENTALS */}

                <div className="bg-white border rounded-3xl p-8 shadow-sm">


                    <h2 className="text-3xl font-bold mb-8">

                        Recent Rentals

                    </h2>



                    <div className="space-y-5">


                        {

                            recentRentals.map((rental) => (

                                <div

                                    key={rental.id}

                                    className="flex justify-between items-center border-b pb-4"

                                >

                                    <div>

                                        <h3 className="text-xl font-semibold">

                                            {

                                                rental.vehicle?.vehicleName

                                            }

                                        </h3>

                                        <p className="text-gray-500">

                                            {

                                                rental.customer?.fullName

                                            }

                                        </p>

                                    </div>



                                    <span className="bg-green-100 text-green-600 px-4 py-2 rounded-xl font-medium">

                                        {

                                            rental.rentalStatus

                                        }

                                    </span>

                                </div>

                            ))

                        }

                    </div>

                </div>



                {/* RECENT RESERVATIONS */}

                <div className="bg-white border rounded-3xl p-8 shadow-sm">


                    <h2 className="text-3xl font-bold mb-8">

                        Recent Reservations

                    </h2>



                    <div className="space-y-5">


                        {

                            recentReservations.map((reservation) => (

                                <div

                                    key={reservation.reservationId}

                                    className="flex justify-between items-center border-b pb-4"

                                >

                                    <div>

                                        <h3 className="text-xl font-semibold">

                                            {

                                                reservation.vehicle?.vehicleName

                                            }

                                        </h3>

                                        <p className="text-gray-500">

                                            {

                                                reservation.customer?.fullName

                                            }

                                        </p>

                                    </div>



                                    <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl font-medium">

                                        {

                                            reservation.reservationStatus

                                        }

                                    </span>

                                </div>

                            ))

                        }

                    </div>

                </div>

            </div>

        </div>

    );

};

export default AdminDashboard;