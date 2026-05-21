import {

    useState,
    useEffect

} from "react";


import Navbar from "../../components/common/Navbar";


const Profile = () => {

    const [user, setUser] = useState(null);

    const [isEditing, setIsEditing] = useState(false);


    const [formData, setFormData] = useState({

        fullName: "",
        address: "",
        drivingLicense: "",
        email: "",
        phoneNumber: ""

    });


    // GET USER

    useEffect(() => {

        const storedUser = JSON.parse(

            localStorage.getItem("user")

        );

        if (storedUser) {

            setUser(storedUser);

            setFormData({

                fullName:

                    storedUser.fullName || "",

                address:

                    storedUser.address || "",

                drivingLicense:

                    storedUser.drivingLicense || "",

                email:

                    storedUser.email || "",

                phoneNumber:

                    storedUser.phoneNumber || ""

            });

        }

    }, []);


    // INPUT CHANGE

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value

        });

    };


    // UPDATE PROFILE

    const handleUpdate = async () => {

        try {

            const response = await fetch(

                `http://localhost:8081/api/auth/update/${user.id}`,

                {

                    method: "PUT",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify({

                        ...user,
                        ...formData

                    })

                }

            );


            if (response.ok) {

                // UPDATED USER FROM DATABASE

                const updatedUser =

                    await response.json();


                // SAVE UPDATED USER

                localStorage.setItem(

                    "user",

                    JSON.stringify(updatedUser)

                );


                // UPDATE FRONTEND

                setUser(updatedUser);


                setFormData({

                    fullName:

                        updatedUser.fullName || "",

                    address:

                        updatedUser.address || "",

                    drivingLicense:

                        updatedUser.drivingLicense || "",

                    email:

                        updatedUser.email || "",

                    phoneNumber:

                        updatedUser.phoneNumber || ""

                });


                setIsEditing(false);


                alert(

                    "Profile Updated Successfully!"

                );

            }

            else {

                alert("Update Failed");

            }

        }

        catch (err) {

            console.log(err);

            alert("Server Error");

        }

    };


    if (!user) {

        return (

            <h1>

                Loading...

            </h1>

        );

    }


    return (

        <div className="min-h-screen bg-[#f5f7fa]">


            {/* NAVBAR */}

            <Navbar />


            {/* PAGE */}

            <div className="max-w-[1400px] mx-auto px-10 py-10">


                {/* TOP */}

                <div className="flex justify-between items-center mb-10">


                    <div>

                        <h1 className="text-5xl font-bold text-gray-900 mb-3">

                            Welcome Back,

                            {" "}

                            {

                                user.fullName

                            }!

                        </h1>


                        <p className="text-gray-500 text-xl">

                            Here's what's happening with your rentals today

                        </p>

                    </div>


                    {/* EDIT */}

                    <button

                        onClick={() =>

                            setIsEditing(!isEditing)

                        }

                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg"
                    >

                        {

                            isEditing

                                ? "Cancel"
                                : "Edit"

                        }

                    </button>

                </div>


                {/* MAIN GRID */}

                <div className="grid grid-cols-12 gap-10">


                    {/* LEFT */}

                    <div className="col-span-4">


                        {/* PROFILE CARD */}

                        <div className="bg-white rounded-3xl shadow-sm border p-10 text-center">


                            {/* IMAGE */}

                            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-orange-400">

                                <img

                                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"

                                    alt="profile"

                                    className="w-full h-full object-cover"

                                />

                            </div>


                            {/* INFO */}

                            <p className="text-gray-500 text-lg">

                                {

                                    user.email

                                }

                            </p>


                            <h2 className="text-3xl font-bold text-gray-900 mt-3">

                                {

                                    user.fullName

                                }

                            </h2>


                            <div className="border-t my-8"></div>


                            {/* STATS */}

                            <div className="space-y-5 text-left">


                                <div className="flex justify-between text-lg">

                                    <span className="text-gray-500">

                                        Member Since

                                    </span>

                                    <span className="font-semibold">

                                        2026

                                    </span>

                                </div>


                                <div className="flex justify-between text-lg">

                                    <span className="text-gray-500">

                                        Total Rentals

                                    </span>

                                    <span className="font-semibold">

                                        4

                                    </span>

                                </div>


                                <div className="flex justify-between text-lg">

                                    <span className="text-gray-500">

                                        Account Status

                                    </span>

                                    <span className="font-semibold text-green-500">

                                        Active

                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* RIGHT */}

                    <div className="col-span-8 space-y-8">


                        {/* PERSONAL INFO */}

                        <div className="bg-white rounded-3xl border shadow-sm p-10">


                            <h2 className="text-3xl font-bold mb-8">

                                Personal Information

                            </h2>


                            <div className="grid grid-cols-2 gap-8">


                                {/* NAME */}

                                <div>

                                    <label className="block text-gray-500 mb-3 font-medium">

                                        Full Name

                                    </label>

                                    <input

                                        type="text"

                                        name="fullName"

                                        value={formData.fullName}

                                        onChange={handleChange}

                                        disabled={!isEditing}

                                        className="w-full h-16 border rounded-xl px-5 text-lg disabled:bg-gray-100"
                                    />

                                </div>


                                {/* EMAIL */}

                                <div>

                                    <label className="block text-gray-500 mb-3 font-medium">

                                        Email

                                    </label>

                                    <input

                                        type="email"

                                        name="email"

                                        value={formData.email}

                                        onChange={handleChange}

                                        disabled={!isEditing}

                                        className="w-full h-16 border rounded-xl px-5 text-lg disabled:bg-gray-100"
                                    />

                                </div>


                                {/* PHONE */}

                                <div>

                                    <label className="block text-gray-500 mb-3 font-medium">

                                        Phone

                                    </label>

                                    <input

                                        type="text"

                                        name="phoneNumber"

                                        value={formData.phoneNumber}

                                        onChange={handleChange}

                                        disabled={!isEditing}

                                        className="w-full h-16 border rounded-xl px-5 text-lg disabled:bg-gray-100"
                                    />

                                </div>


                                {/* ADDRESS */}

                                <div>

                                    <label className="block text-gray-500 mb-3 font-medium">

                                        Address

                                    </label>

                                    <input

                                        type="text"

                                        name="address"

                                        value={formData.address}

                                        onChange={handleChange}

                                        disabled={!isEditing}

                                        className="w-full h-16 border rounded-xl px-5 text-lg disabled:bg-gray-100"
                                    />

                                </div>

                            </div>

                        </div>


                        {/* LICENSE */}

                        <div className="bg-white rounded-3xl border shadow-sm p-10">


                            <h2 className="text-3xl font-bold mb-8">

                                Driving License Information

                            </h2>


                            <div className="grid grid-cols-2 gap-8">


                                <div>

                                    <label className="block text-gray-500 mb-3 font-medium">

                                        License Number

                                    </label>

                                    <input

                                        type="text"

                                        name="drivingLicense"

                                        value={formData.drivingLicense}

                                        onChange={handleChange}

                                        disabled={!isEditing}

                                        className="w-full h-16 border rounded-xl px-5 text-lg disabled:bg-gray-100"
                                    />

                                </div>


                                <div>

                                    <label className="block text-gray-500 mb-3 font-medium">

                                        Expiry Date

                                    </label>

                                    <input

                                        type="text"

                                        value="10-05-2027"

                                        disabled

                                        className="w-full h-16 border rounded-xl px-5 text-lg bg-gray-100"
                                    />

                                </div>

                            </div>

                        </div>


                        {/* UPDATE BUTTON */}

                        {

                            isEditing && (

                                <button

                                    onClick={handleUpdate}

                                    className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl text-lg font-semibold"
                                >

                                    Update Profile

                                </button>

                            )

                        }

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Profile;