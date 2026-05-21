import { useEffect, useState } from "react";
import { getAllVehicles } from "../../services/vehicleService";
import { Link } from "react-router-dom";

const FeaturedVehicles = () => {

  const [vehicles, setVehicles] = useState([]);

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

  return (

    <section className="w-full bg-[#f6f6f6] py-28">

      {/* MAIN CONTAINER */}
      <div className="relative -top-40 max-w-[1500px] mx-auto px-24 scale-85">

        {/* FILTER SECTION */}
        <div className="w-full bg-white rounded-[28px] shadow-lg px-10 py-8 flex items-center justify-between gap-6 mb-24 -mt-40 relative z-20">

          <input
            type="text"
            placeholder="Location"
            className="flex-1 h-[70px] border border-gray-200 rounded-2xl px-6 text-[20px] outline-none"
          />

          <input
            type="date"
            className="flex-1 h-[70px] border border-gray-200 rounded-2xl px-6 text-[20px] outline-none"
          />

          <input
            type="date"
            className="flex-1 h-[70px] border border-gray-200 rounded-2xl px-6 text-[20px] outline-none"
          />

          <select className="flex-1 h-[70px] border border-gray-200 rounded-2xl px-6 text-[20px] outline-none">

            <option>Vehicle Type</option>

          </select>

          <button className="bg-orange-500 hover:bg-orange-600 transition text-white h-[70px] px-14 rounded-2xl text-[22px] font-semibold">

            Search

          </button>

        </div>

        {/* TITLE */}
        <div className="text-center mb-20 scale-90">

          <h2 className="text-[64px] font-bold text-black">

            Featured Vehicles

          </h2>

          <p className="text-gray-500 text-[24px] mt-5">

            Explore our handpicked selection of premium vehicles available for rent

          </p>

        </div>

        {/* VEHICLE GRID */}
        <div className=" grid grid grid-cols-3 gap-12 scale-90">

          {vehicles.map((vehicle) => (

            <div
              key={vehicle.id}
              className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >

              {/* IMAGE */}
              <div className="relative">

                <img
                  src={`http://localhost:8081/uploads/cars/${vehicle.imageName}`}
                  alt={vehicle.vehicleName}
                  className="w-full h-[320px] object-cover"
                />

                {/* CATEGORY */}
                <div className="absolute top-5 left-5 bg-blue-500 text-white text-[18px] font-medium px-5 py-2 rounded-full">

                  Car

                </div>

                {/* STATUS */}
                <div className="absolute top-5 right-5 bg-green-100 text-green-700 text-[18px] font-medium px-5 py-2 rounded-full">

                  {vehicle.availabilityStatus}

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-8 scale-90">

                {/* TOP */}
                <div className="flex items-center justify-between">

                  <h3 className="text-[34px] font-bold">

                    {vehicle.vehicleName}

                  </h3>

                  <span className="text-[24px] font-semibold">

                    ⭐ 4.8

                  </span>

                </div>

                <p className="text-gray-500 text-[22px] mt-3">

                  {vehicle.model}

                </p>

                {/* INFO */}
                <div className="flex items-center gap-10 mt-8 text-gray-600 text-[20px]">

                  <span>5 seats</span>

                  <span>Automatic</span>

                  <span>Petrol</span>

                </div>

                {/* LINE */}
                <div className="w-full h-[1px] bg-gray-200 my-8"></div>

                {/* BOTTOM */}
                <div className="flex items-center justify-between">

                  <div>

                    <h4 className="text-[42px] font-bold">

                      ৳{vehicle.pricePerDay}

                    </h4>

                    <p className="text-gray-500 text-[18px]">

                      per day

                    </p>

                  </div>

                  <Link to={`/vehicles/${vehicle.id}`}>
                  
                      <button className="bg-orange-500 hover:bg-orange-600 transition text-white text-[20px] font-semibold px-8 py-4 rounded-2xl">
                        
                           View Details
                      
                      </button>
                    
                    </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default FeaturedVehicles;