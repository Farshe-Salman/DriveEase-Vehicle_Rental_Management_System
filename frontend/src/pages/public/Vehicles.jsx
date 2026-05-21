import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

import { getAllVehicles } from "../../services/vehicleService";

const Vehicles = () => {

    const [vehicles, setVehicles] = useState([]);

    const [search, setSearch] = useState("");
    const [availability, setAvailability] = useState("All");


    useEffect(() => {

        fetchVehicles();

    }, []);

    const fetchVehicles = async () => {

        try {

            const response = await getAllVehicles();

            setVehicles(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const filteredVehicles = vehicles.filter((vehicle) => {

        // SEARCH FILTER
        const matchesSearch =
            vehicle.vehicleName
                .toLowerCase()
                .includes(search.toLowerCase());

        // AVAILABILITY FILTER
        const matchesAvailability =
            availability === "All" ||
            vehicle.availabilityStatus === availability;

        return matchesSearch && matchesAvailability;

    });

    return (

        <>
            <Navbar />

            <section className="w-full bg-[#f6f6f6] py-20">

                <div className="max-w-[1500px] mx-auto px-24 scale-90">

                    {/* PAGE TITLE */}
                    <div className="relative -top-10 text-center mb-16">

                        <h1 className="text-[64px] font-bold">

                            Browse Vehicles

                        </h1>

                        <p className="text-gray-500 text-[24px] mt-4">

                            Find your perfect ride from our premium collection

                        </p>

                    </div>

                    {/* MAIN GRID */}
                    <div className="grid grid-cols-[350px_1fr] gap-14">

                        {/* LEFT FILTER */}
                        <div className="bg-white rounded-[30px] p-10 h-fit sticky top-10">

                            <h2 className="text-[36px] font-bold mb-10">

                                Filters

                            </h2>

                            {/* SEARCH */}
                            <div className="mb-8">

                                <label className="text-[20px] font-medium">
                                    Search
                                </label>

                                <input
                                    type="text"
                                    placeholder="Search vehicles..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full h-[65px] border border-gray-200 rounded-2xl px-5 mt-4 text-[18px] outline-none"
                                />

                            </div>

                            {/* CATEGORY */}
                            <div className="mb-8">

                                <label className="text-[20px] font-medium">
                                    Category
                                </label>

                                <select className="w-full h-[65px] border border-gray-200 rounded-2xl px-5 mt-4 text-[18px] outline-none">

                                    <option>All Categories</option>

                                </select>

                            </div>

                            {/* STATUS */}
                            <div className="mb-8">

                                <label className="text-[20px] font-medium">
                                    Availability
                                </label>

                                <select
                                    value={availability}
                                    onChange={(e) => setAvailability(e.target.value)}
                                    className="w-full h-[65px] border border-gray-200 rounded-2xl px-5 mt-4 text-[18px] outline-none"
                                >

                                    <option value="All">
                                        All Status
                                    </option>

                                    <option value="Available">
                                        Available
                                    </option>

                                    <option value="Unavailable">
                                        Unavailable
                                    </option>

                                </select>

                            </div>

                            {/* BUTTON */}
                            <button className="w-full h-[70px] bg-orange-500 hover:bg-orange-600 transition text-white text-[22px] font-semibold rounded-2xl mt-6">

                                Apply Filters

                            </button>

                        </div>

                        {/* RIGHT VEHICLES */}
                        <div>

                            <div className="grid grid-cols-3 gap-10">

                                {filteredVehicles.map((vehicle) => (

                                    <div
                                        key={vehicle.id}
                                        className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition"
                                    >

                                        {/* IMAGE */}
                                        <div className="relative">

                                            <img
                                                src={`http://localhost:8081/uploads/cars/${vehicle.imageName}`}
                                                alt={vehicle.vehicleName}
                                                className="w-full h-[280px] object-cover"
                                            />

                                            <div className="absolute top-5 right-5 bg-green-100 text-green-700 text-[16px] px-5 py-2 rounded-full">

                                                {vehicle.availabilityStatus}

                                            </div>

                                        </div>

                                        {/* CONTENT */}
                                        <div className="p-8 scale-90">

                                            <div className="flex items-center justify-between">

                                                <h2 className="text-[32px] font-bold">

                                                    {vehicle.vehicleName}

                                                </h2>

                                                <span className="text-[20px]">

                                                    ⭐ 4.8

                                                </span>

                                            </div>

                                            <p className="text-gray-500 text-[20px] mt-3">

                                                {vehicle.model}

                                            </p>

                                            {/* INFO */}
                                            <div className="flex items-center gap-8 mt-8 text-gray-600 text-[18px]">

                                                <span>5 Seats</span>
                                                <span>Automatic</span>
                                                <span>Petrol</span>

                                            </div>

                                            {/* LINE */}
                                            <div className="w-full h-[1px] bg-gray-200 my-8"></div>

                                            {/* BOTTOM */}
                                            <div className="flex items-center justify-between">

                                                <div>

                                                    <h3 className="text-[38px] font-bold">

                                                        ৳{vehicle.pricePerDay}

                                                    </h3>

                                                    <p className="text-gray-500 text-[18px]">

                                                        per day

                                                    </p>

                                                </div>

                                                <Link to={`/vehicles/${vehicle.id}`}>

                                                    <button className="bg-orange-500 hover:bg-orange-600 transition text-white text-[18px] font-semibold px-7 py-4 rounded-2xl">

                                                        View Details

                                                    </button>

                                                </Link>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />
        </>

    );
};

export default Vehicles;