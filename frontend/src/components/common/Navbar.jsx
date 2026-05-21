import { useState, useEffect } from "react";

import {

  Link,
  useNavigate

} from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();


  const [user, setUser] = useState(null);

  const [showMenu, setShowMenu] = useState(false);


  // GET USER

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {

      setUser(JSON.parse(storedUser));

    }

  }, []);


  // LOGOUT

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/");

    window.location.reload();

  };


  return (

    <nav className="w-full h-20 border-b bg-white sticky top-0 z-50 flex items-center justify-between px-14">


      {/* LOGO */}

      <div className="flex items-center">

        <Link to="/">

          <h1 className="text-4xl font-extrabold text-black cursor-pointer">

            Drive

            <span className="text-orange-500">

              Ease

            </span>

          </h1>

        </Link>

      </div>


      {/* MENU */}

      <ul className="flex items-center gap-12 text-[18px] font-semibold text-gray-800">


        <Link to="/">

          <li className="cursor-pointer hover:text-orange-500 transition">

            Home

          </li>

        </Link>


        <Link to="/vehicles">

          <li className="cursor-pointer hover:text-orange-500 transition">

            Vehicles

          </li>

        </Link>


        <li className="cursor-pointer hover:text-orange-500 transition">

          How it works

        </li>


        <li className="cursor-pointer hover:text-orange-500 transition">

          Contact

        </li>

      </ul>


      {/* RIGHT SIDE */}

      <div className="relative">


        {/* IF USER LOGIN */}

        {

          user ? (

            <div className="relative">


              {/* PROFILE BUTTON */}

              <button

                onClick={() =>

                  setShowMenu(!showMenu)

                }

                className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-500"
              >

                <img

                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"

                  alt="profile"

                  className="w-full h-full object-cover"

                />

              </button>


              {/* DROPDOWN */}

              {

                showMenu && (

                  <div className="absolute right-0 top-16 w-52 bg-white border rounded-2xl shadow-xl overflow-hidden z-50">


                    {/* USER NAME */}

                    <div className="px-5 py-4 border-b bg-gray-50">

                      <h2 className="font-bold text-gray-800 text-[17px]">

                        {

                          user.fullName ||

                          "Customer"

                        }

                      </h2>

                    </div>


                    {/* PROFILE */}

                    <button

                      onClick={() =>

                        navigate("/profile")

                      }

                      className="w-full text-left px-5 py-4 hover:bg-gray-100 transition text-[16px] font-medium"
                    >

                      Profile

                    </button>


                    {/* DASHBOARD */}

                    <button

                      onClick={() =>

                        navigate("/dashboard")

                      }

                      className="w-full text-left px-5 py-4 hover:bg-gray-100 transition text-[16px] font-medium"
                    >

                      Dashboard

                    </button>


                    {/* LOGOUT */}

                    <button

                      onClick={handleLogout}

                      className="w-full text-left px-5 py-4 text-red-500 hover:bg-red-50 transition text-[16px] font-medium"
                    >

                      Logout

                    </button>

                  </div>

                )

              }

            </div>

          ) : (


            /* IF NOT LOGIN */

            <Link to="/login">

              <button className="bg-orange-500 hover:bg-orange-600 text-white text-[18px] font-semibold px-7 py-3 rounded-xl transition">

                Login / SignUp

              </button>

            </Link>

          )

        }

      </div>

    </nav>

  );

};

export default Navbar;