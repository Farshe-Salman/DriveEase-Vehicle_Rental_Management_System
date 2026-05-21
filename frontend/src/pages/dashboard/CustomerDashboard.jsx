import {

    useEffect,
    useState

} from "react";

import axios from "axios";

import Navbar from "../../components/common/Navbar";


const CustomerDashboard = () => {

    const [user, setUser] = useState(null);

    const [rentals, setRentals] = useState([]);

    const [reservations, setReservations] = useState([]);


    useEffect(() => {

        const storedUser = JSON.parse(

            localStorage.getItem("user")

        );

        setUser(storedUser);


        if (storedUser) {

            fetchRentals(storedUser.id);

            fetchReservations(storedUser.id);

        }

    }, []);


    // FETCH RENTALS

    const fetchRentals = async (customerId) => {

        try {

            const response = await axios.get(

                `http://localhost:8081/api/rental/customer/${customerId}`

            );

            setRentals(response.data);

        }

        catch (err) {

            console.log(err);

        }

    };


    // FETCH RESERVATIONS

    const fetchReservations = async (customerId) => {

        try {

            const response = await axios.get(

                `http://localhost:8081/api/reservation/customer/${customerId}`

            );

            setReservations(response.data);

        }

        catch (err) {

            console.log(err);

        }

    };


    if (!user) {

        return <h1>Loading...</h1>;

    }


    return (

        <div className="min-h-screen bg-[#f5f7fa]">


            <Navbar />


            <div className="max-w-[1500px] mx-auto px-10 py-10">


                {/* TOP */}

                <div className="flex justify-between items-center mb-12">


                    <div>

                        <h1 className="text-5xl font-bold text-gray-900">

                            Welcome back,

                            {" "}

                            {user.fullName}!

                        </h1>


                        <p className="text-gray-500 text-xl mt-3">

                            Here's what's happening with your rentals today

                        </p>

                    </div>


                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold">

                        Book a Vehicle

                    </button>

                </div>


                {/* STATS */}

                <div className="grid grid-cols-4 gap-8 mb-10">


                    <div className="bg-white rounded-3xl border p-8">

                        <h3 className="text-gray-500 text-lg">

                            Active Rentals

                        </h3>

                        <h1 className="text-5xl font-bold mt-4">

                            {rentals.length}

                        </h1>

                    </div>


                    <div className="bg-white rounded-3xl border p-8">

                        <h3 className="text-gray-500 text-lg">

                            Reservations

                        </h3>

                        <h1 className="text-5xl font-bold mt-4">

                            {reservations.length}

                        </h1>

                    </div>


                    <div className="bg-white rounded-3xl border p-8">

                        <h3 className="text-gray-500 text-lg">

                            Total Spent

                        </h3>

                        <h1 className="text-5xl font-bold mt-4">

                            ৳

                            {

                                rentals.reduce(

                                    (total, item) =>

                                        total + (item.totalCost || 0),

                                    0

                                )

                            }

                        </h1>

                    </div>


                    <div className="bg-white rounded-3xl border p-8">

                        <h3 className="text-gray-500 text-lg">

                            Total Rentals

                        </h3>

                        <h1 className="text-5xl font-bold mt-4">

                            {rentals.length}

                        </h1>

                    </div>

                </div>


                {/* MAIN GRID */}

                <div className="grid grid-cols-12 gap-8">


                    {/* LEFT */}

                    <div className="col-span-8 space-y-8">


                        {/* RENTALS */}

                        <div className="bg-white rounded-3xl border p-8">


                            <h2 className="text-3xl font-bold mb-8">

                                Active Rentals

                            </h2>


                            <div className="space-y-6">


                                {

                                    rentals.map((rental) => (

                                        <div

                                            key={rental.id}

                                            className="border rounded-2xl p-6 flex justify-between items-center"
                                        >

                                            <div>

                                                <h2 className="text-2xl font-bold">

                                                    {

                                                        rental.vehicle.vehicleName

                                                    }

                                                </h2>


                                                <p className="text-gray-500 mt-2">

                                                    {

                                                        rental.rentalStartDate

                                                    }

                                                    {" "} -

                                                    {

                                                        rental.expectedReturnDate

                                                    }

                                                </p>

                                            </div>


                                            <div>

                                                <span className="bg-green-100 text-green-600 px-5 py-2 rounded-xl font-semibold">

                                                    {

                                                        rental.rentalStatus

                                                    }

                                                </span>

                                            </div>

                                        </div>

                                    ))

                                }

                            </div>

                        </div>


                        {/* RESERVATIONS */}

                        <div className="bg-white rounded-3xl border p-8">


                            <h2 className="text-3xl font-bold mb-8">

                                Reservations

                            </h2>


                            <div className="space-y-6">


                                {

                                    reservations.map((reservation) => (

                                        <div

                                            key={reservation.reservationId}

                                            className="border rounded-2xl p-6 flex justify-between items-center"
                                        >

                                            <div>

                                                <h2 className="text-2xl font-bold">

                                                    {

                                                        reservation.vehicle.vehicleName

                                                    }

                                                </h2>


                                                <p className="text-gray-500 mt-2">

                                                    {

                                                        reservation.pickupDate

                                                    }

                                                    {" "} -

                                                    {

                                                        reservation.returnDate

                                                    }

                                                </p>

                                            </div>


                                            <div>

                                                <span className="bg-yellow-100 text-yellow-600 px-5 py-2 rounded-xl font-semibold">

                                                    {

                                                        reservation.reservationStatus

                                                    }

                                                </span>

                                            </div>

                                        </div>

                                    ))

                                }

                            </div>

                        </div>

                    </div>


                    {/* RIGHT */}

                    <div className="col-span-4">


                        <div className="bg-white rounded-3xl border p-8">


                            <h2 className="text-3xl font-bold mb-8">

                                Profile

                            </h2>


                            <div className="flex items-center gap-5">


                                <img

                                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"

                                    alt="profile"

                                    className="w-24 h-24 rounded-full border"
                                />


                                <div>

                                    <h2 className="text-2xl font-bold">

                                        {

                                            user.fullName

                                        }

                                    </h2>


                                    <p className="text-gray-500">

                                        {

                                            user.email

                                        }

                                    </p>

                                </div>

                            </div>


                            <div className="mt-10 space-y-5 text-lg">


                                <div className="flex justify-between">

                                    <span className="text-gray-500">

                                        Total Rentals

                                    </span>

                                    <span className="font-semibold">

                                        {

                                            rentals.length

                                        }

                                    </span>

                                </div>


                                <div className="flex justify-between">

                                    <span className="text-gray-500">

                                        Status

                                    </span>

                                    <span className="text-green-500 font-semibold">

                                        Active

                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default CustomerDashboard;