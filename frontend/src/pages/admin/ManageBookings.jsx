import {

    useEffect,
    useState

} from "react";

import axios from "axios";


const ManageBookings = () => {


    const [bookings, setBookings]
        = useState([]);


    const [search, setSearch]
        = useState("");


    const [showModal, setShowModal]
        = useState(false);




    useEffect(() => {

        fetchBookings();

    }, []);




    const fetchBookings = async () => {

        try {

            const res = await axios.get(

                "http://localhost:8081/api/rental"

            );

            setBookings(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };



    const filteredBookings =

        bookings.filter((booking) =>

            booking.id
                .toString()
                .includes(search)

        );



    return (

        <div className="p-10">


            {/* TOP */}

            <div className="flex justify-between items-center mb-10">


                <h1 className="text-5xl font-bold">

                    Manage Bookings

                </h1>



                <button

                    onClick={() =>
                        setShowModal(true)
                    }

                    className="bg-orange-500 text-white px-8 py-4 rounded-2xl text-xl"

                >

                    Make Booking

                </button>

            </div>



            {/* SEARCH */}

            <div className="mb-8">

                <input

                    type="text"

                    placeholder="Search By Rental ID"

                    value={search}

                    onChange={(e) =>
                        setSearch(e.target.value)
                    }

                    className="border p-4 rounded-2xl w-[400px]"

                />

            </div>




            {/* MODAL */}

            {

                showModal && (

                    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">


                        <div className="bg-white w-[700px] rounded-3xl p-10">


                            <h1 className="text-4xl font-bold mb-8">

                                Make Booking

                            </h1>



                            <div className="space-y-5">


                                <input

                                    type="text"

                                    placeholder="Customer ID"

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="text"

                                    placeholder="Vehicle ID"

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="date"

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="date"

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="number"

                                    placeholder="Total Cost"

                                    className="w-full border p-4 rounded-xl"

                                />



                                <div className="flex gap-5 pt-5">


                                    <button

                                        className="bg-orange-500 text-white px-8 py-4 rounded-2xl"

                                    >

                                        Add

                                    </button>



                                    <button

                                        onClick={() =>
                                            setShowModal(false)
                                        }

                                        className="bg-gray-200 px-8 py-4 rounded-2xl"

                                    >

                                        Cancel

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                )

            }




            {/* TABLE */}

            <div className="bg-white border rounded-3xl overflow-hidden">


                <table className="w-full">


                    <thead className="bg-gray-100">


                        <tr>

                            <th className="p-5">

                                Rental ID

                            </th>

                            <th>

                                Vehicle

                            </th>

                            <th>

                                Pickup Date

                            </th>

                            <th>

                                Return Date

                            </th>

                            <th>

                                Total

                            </th>

                            <th>

                                Status

                            </th>

                            <th>

                                Payment

                            </th>

                        </tr>

                    </thead>



                    <tbody>


                        {

                            filteredBookings.map((booking) => (

                                <tr

                                    key={booking.id}

                                    className="border-t"

                                >

                                    <td className="p-5">

                                        r-{booking.id}

                                    </td>



                                    <td>

                                        {

                                            booking.vehicle?.vehicleName

                                        }

                                    </td>



                                    <td>

                                        {

                                            booking.rentalStartDate

                                        }

                                    </td>



                                    <td>

                                        {

                                            booking.expectedReturnDate

                                        }

                                    </td>



                                    <td>

                                        ৳

                                        {

                                            booking.totalCost

                                        }

                                    </td>



                                    <td>

                                        <span className="bg-green-100 text-green-600 px-4 py-2 rounded-xl">

                                            {

                                                booking.rentalStatus

                                            }

                                        </span>

                                    </td>



                                    <td>

                                        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl">

                                            {

                                                booking.paymentStatus

                                            }

                                        </span>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default ManageBookings;