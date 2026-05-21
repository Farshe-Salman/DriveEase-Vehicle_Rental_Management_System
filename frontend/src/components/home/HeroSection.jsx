import { Link } from "react-router-dom";

const HeroSection = () => {
  return (

    <section className="w-full min-h-[550px] bg-[#f7f7f7] flex items-center justify-between px-20 py-16">

      {/* LEFT SIDE */}
      <div className="max-w-2xl">

        <h1 className="relative left-10 -top-20 text-7xl font-bold leading-tight text-black">

          Find Your
          <br />
          Perfect Ride

        </h1>

        <p className="relative left-10 -top-17 mt-8 text-gray-600 text-xl leading-relaxed">

          Discover premium vehicles for every
          journey. Book instantly, drive in style.

        </p>

        <div className="relative left-10 -top-10 flex gap-5 mt-10">

          <Link to="/vehicles">
            <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl text-lg font-semibold">

              Browse Vehicle

            </button>
          </Link>

          <button className="border-2 border-black hover:bg-black hover:text-white transition px-8 py-4 rounded-xl text-lg font-semibold">

            Learn More

          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="relative -left-10 -top-15 flex justify-center items-center">

        <img
          src="http://localhost:8081/uploads/cars/main.jpg"
          alt="car"
          className="w-[750px] object-contain drop-shadow-2xl"
        />

      </div>

    </section>
  );
};

export default HeroSection;