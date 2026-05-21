import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";


const VehicleDetails = () => {

    const { id } = useParams();

    const [vehicle, setVehicle] = useState(null);

    const navigate = useNavigate();

    const [startDate, setStartDate] = useState("");

    const [returnDate, setReturnDate] = useState("");

    useEffect(() => {

        fetchVehicle();

    }, []);

    const fetchVehicle = async () => {

        try {

            const response = await axios.get(
                `http://localhost:8081/api/vehicles/${id}`
            );

            setVehicle(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const handleBookNow = async () => {

        // LOGIN CHECK

        const user = JSON.parse(

            localStorage.getItem("user")

        );


        if (!user) {

            navigate("/login");

            return;

        }


        try {

            const rentalData = {

                rentalStartDate: startDate,

                expectedReturnDate: returnDate,

                rentalStatus: "Ongoing",

                paymentStatus: "Pending",

                totalCost: vehicle.pricePerDay,


                customer: {

                    id: user.id

                },


                vehicle: {

                    id: vehicle.id

                }

            };


            const response = await fetch(

                "http://localhost:8081/api/rental/book",

                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify(rentalData)

                }

            );


            const message = await response.text();

            alert(message);

        }

        catch (err) {

            console.log(err);

            alert("Booking Failed");

        }

    };

    const handleReserve = async () => {

        const user = JSON.parse(

            localStorage.getItem("user")

        );


        if (!user) {

            navigate("/login");

            return;

        }


        try {

            const reservationData = {

                reservationDate: new Date(),

                pickupDate: startDate,

                returnDate: returnDate,

                reservationStatus: "Pending",


                customer: {

                    id: user.id

                },


                vehicle: {

                    id: vehicle.id

                }

            };


            const response = await fetch(

                "http://localhost:8081/api/reservation/reserve",

                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify(reservationData)

                }

            );


            const message = await response.text();

            alert(message);

        }

        catch (err) {

            console.log(err);

            alert("Reservation Failed");

        }

    };

    if (!vehicle) {

        return <h1>Loading...</h1>;

    }

    return (

        <>
            <Navbar />

            <section className="w-full bg-[#f6f6f6] py-20">

                <div className="max-w-[1500px] mx-auto px-24">

                    <div className="grid grid-cols-2 gap-20 scale-90">

                        {/* LEFT */}
                        <div className="relative -top-10 scale-90">

                            <img
                                src={`http://localhost:8081/uploads/cars/${vehicle.imageName}`}
                                alt={vehicle.vehicleName}
                                className="w-full h-[550px] object-cover rounded-[30px]"
                            />

                            {/* SMALL IMAGES */}
                            <div className="relative left-45 top-10 flex gap-6 mt-9 scale-150">

                                <img
                                    src={`http://localhost:8081/uploads/cars/${vehicle.imageName}`}
                                    alt=""
                                    className="w-[140px] h-[100px] rounded-2xl object-cover"
                                />

                                <img
                                    src={`http://localhost:8081/uploads/cars/${vehicle.imageName}`}
                                    alt=""
                                    className="w-[140px] h-[100px] rounded-2xl object-cover"
                                />

                                <img
                                    src={`http://localhost:8081/uploads/cars/${vehicle.imageName}`}
                                    alt=""
                                    className="w-[140px] h-[100px] rounded-2xl object-cover"
                                />

                            </div>

                            {/* DETAILS CARD */}
                            <div className="relative top-20 bg-white rounded-[30px] p-10 mt-12">

                                <div className="flex items-center justify-between">

                                    <h1 className="text-[48px] font-bold">

                                        {vehicle.vehicleName}

                                    </h1>

                                    <span className="text-[24px]">

                                        ⭐ 4.8

                                    </span>

                                </div>

                                <p className="text-gray-500 text-[22px] mt-3">

                                    {vehicle.model}

                                </p>

                                {/* SPECS */}
                                <div className="relative top-10 grid grid-cols-4 gap-6 mt-10">

                                    <div className="bg-[#eef9ff] rounded-2xl p-6 text-center">

                                        <h3 className="text-[18px] text-gray-500">
                                            seats
                                        </h3>

                                        <p className="text-[26px] font-bold mt-2">
                                            5
                                        </p>

                                    </div>

                                    <div className="bg-[#eef9ff] rounded-2xl p-6 text-center">

                                        <h3 className="text-[18px] text-gray-500">
                                            fuel
                                        </h3>

                                        <p className="text-[26px] font-bold mt-2">
                                            Petrol
                                        </p>

                                    </div>

                                    <div className="bg-[#eef9ff] rounded-2xl p-6 text-center">

                                        <h3 className="text-[18px] text-gray-500">
                                            year
                                        </h3>

                                        <p className="text-[26px] font-bold mt-2">
                                            {vehicle.manufacturingYear}
                                        </p>

                                    </div>

                                    <div className="bg-[#eef9ff] rounded-2xl p-6 text-center">

                                        <h3 className="text-[18px] text-gray-500">
                                            status
                                        </h3>

                                        <p className="text-[26px] font-bold mt-2">
                                            {vehicle.availabilityStatus}
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div className="relative top-37 bg-white rounded-[30px] p-10 mt-10">

                                <h2 className="text-[25px] font-bold mb-6">

                                    Description

                                </h2>

                                <p className="text-gray-600 text-[21px] leading-10">

                                    Experience luxury and performance with the
                                    {vehicle.vehicleName}. This premium vehicle is
                                    designed for comfortable daily commuting and
                                    long-distance travel. Equipped with advanced
                                    technology, superior comfort, and excellent
                                    driving dynamics, it guarantees a smooth and
                                    enjoyable ride for every journey.

                                </p>

                            </div>

                        </div>

                        {/* RIGHT */}
                        <div>

                            <div className="relative bg-white rounded-[30px] p-10 -top-5 scale-90">

                                {/* FORM */}
                                <div className="mt-12 space-y-8 scale-90">
                                    <p className="text-gray-500 text-[22px]">
                                        Price Per Day
                                    </p>

                                    <h1 className="text-[60px] font-bold mt-3">

                                        ৳{vehicle.pricePerDay}

                                    </h1>

                                    {/* FORM */}
                                    <div className="mt-12">

                                        <div className="space-y-8">

                                            <label className="block text-[25px] font-semibold text-gray-700 mb-2">

                                                Rental Start Date

                                            </label>
                                            <input
                                                type="date"

                                                value={startDate}

                                                onChange={(e) =>

                                                    setStartDate(e.target.value)

                                                }

                                                className="w-full h-16 border rounded-xl px-5 text-lg"
                                            />

                                            <label className="block text-[25px] font-semibold text-gray-700 mb-2">

                                                Expected Return Date

                                            </label>
                                            <input

                                                type="date"

                                                value={returnDate}

                                                onChange={(e) =>

                                                    setReturnDate(e.target.value)

                                                }

                                                className="w-full h-16 border rounded-xl px-5 text-lg"
                                            />

                                        </div>

                                        {/* BUTTONS */}
                                        <div className="flex flex-col gap-5 mt-10">

                                            <button onClick={handleBookNow} className="w-full h-[72px] bg-orange-500 hover:bg-orange-600 transition text-white text-[24px] font-semibold rounded-2xl">

                                                Book Now

                                            </button>

                                            <button onClick={handleReserve} className="w-full h-[72px] border-2 border-gray-300 hover:bg-gray-100 transition text-[22px] font-medium rounded-2xl">

                                                Reserve for Later

                                            </button>

                                        </div>

                                        {/* FEATURES */}
                                        <div className="border-t border-gray-200 mt-12 pt-10">

                                            <div className="space-y-6 text-[21px] text-gray-600">

                                                <div className="flex items-center gap-4">

                                                    <span className="text-green-500 text-[24px]">
                                                        ✔
                                                    </span>

                                                    <p>
                                                        Free cancellation within 24 hrs
                                                    </p>

                                                </div>

                                                <div className="flex items-center gap-4">

                                                    <span className="text-green-500 text-[24px]">
                                                        ✔
                                                    </span>

                                                    <p>
                                                        Unlimited mileage
                                                    </p>

                                                </div>

                                                <div className="flex items-center gap-4">

                                                    <span className="text-green-500 text-[24px]">
                                                        ✔
                                                    </span>

                                                    <p>
                                                        24/7 road assistance
                                                    </p>

                                                </div>

                                                <div className="flex items-center gap-4">

                                                    <span className="text-green-500 text-[24px]">
                                                        ✔
                                                    </span>

                                                    <p>
                                                        Comprehensive insurance included
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="relative top-20">
                <Footer />
            </section>


        </>

    );
};

export default VehicleDetails;