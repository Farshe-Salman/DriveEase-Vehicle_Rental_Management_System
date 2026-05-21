import {

    useEffect,
    useState

} from "react";

import axios from "axios";


const ManageReservations = () => {


    const [reservations, setReservations]
        = useState([]);


    const [search, setSearch]
        = useState("");


    const [showModal, setShowModal]
        = useState(false);




    useEffect(() => {

        fetchReservations();

    }, []);




    const fetchReservations = async () => {

        try {

            const res = await axios.get(

                "http://localhost:8081/api/reservation"

            );

            setReservations(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };



    const filteredReservations =

        reservations.filter((reservation) =>

            reservation.reservationId
                .toString()
                .includes(search)

        );



    return (

        <div className="p-10">


            {/* TOP */}

            <div className="flex justify-between items-center mb-10">


                <h1 className="text-5xl font-bold">

                    Manage Reservations

                </h1>



                <button

                    onClick={() =>
                        setShowModal(true)
                    }

                    className="bg-orange-500 text-white px-8 py-4 rounded-2xl text-xl"

                >

                    Make Reservation

                </button>

            </div>



            {/* SEARCH */}

            <div className="mb-8">

                <input

                    type="text"

                    placeholder="Search By Reservation ID"

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

                                Make Reservation

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

                                Reservation ID

                            </th>

                            <th>

                                Vehicle

                            </th>

                            <th>

                                Customer ID

                            </th>

                            <th>

                                Pickup Date

                            </th>

                            <th>

                                Return Date

                            </th>

                            <th>

                                Status

                            </th>

                        </tr>

                    </thead>



                    <tbody>


                        {

                            filteredReservations.map((reservation) => (

                                <tr

                                    key={reservation.reservationId}

                                    className="border-t"

                                >

                                    <td className="p-5">

                                        rv-{reservation.reservationId}

                                    </td>



                                    <td>

                                        {

                                            reservation.vehicle?.vehicleName

                                        }

                                    </td>



                                    <td>

                                        c-

                                        {

                                            reservation.customer?.id

                                        }

                                    </td>



                                    <td>

                                        {

                                            reservation.pickupDate

                                        }

                                    </td>



                                    <td>

                                        {

                                            reservation.returnDate

                                        }

                                    </td>



                                    <td>

                                        <span className="bg-green-100 text-green-600 px-4 py-2 rounded-xl">

                                            {

                                                reservation.reservationStatus

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

export default ManageReservations;