import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Auth = ({ onLoginSuccess }) => {

    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true);

    const [error, setError] = useState("");

    const [formData, setFormData] = useState({

        fullName: "",
        address: "",
        drivingLicense: "",
        registration_Date: "",

        email: "",
        phoneNumber: "",

        password: "",
        confirmPassword: ""

    });


    // INPUT CHANGE

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value

        });

    };


    // SUBMIT

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");


        // ADMIN LOGIN

        if (

            isLogin &&
            formData.email === "admin@gmail.com" &&
            formData.password === "admin"

        ) {

            localStorage.setItem(

                "user",

                JSON.stringify({

                    name: "Admin",
                    role: "ADMIN"

                })

            );

            navigate("/");

            return;

        }


        // PASSWORD MATCH

        if (

            !isLogin &&
            formData.password !== formData.confirmPassword

        ) {

            setError("Passwords do not match!");

            return;

        }


        // API

        const endpoint = isLogin

            ? "/api/auth/login"
            : "/api/auth/signup";


        try {

            const response = await fetch(

                `http://localhost:8081${endpoint}`,

                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify(formData)

                }

            );


            if (response.ok) {

                // LOGIN

                if (isLogin) {

                    const userData = await response.json();

                    localStorage.setItem(

                        "user",

                        JSON.stringify({

                            ...userData,
                            role: "USER"

                        })

                    );

                    navigate("/dashboard");

                }

                // REGISTER

                else {

                    alert("Account Created Successfully!");

                    setIsLogin(true);

                }

            }

            else {

                const errText = await response.text();

                setError(

                    errText || "Authentication Failed"

                );

            }

        }

        catch (err) {

            setError("Server Error");

        }

    };


    return (

        <div className="min-h-screen bg-[#f5f7fa] flex justify-center items-center px-4 py-10">

            <div className="w-full max-w-[560px] bg-white rounded-[30px] shadow-xl p-10">


                {/* LOGO */}

                <div className="flex flex-col items-center mb-10 gap-3">

                    <div className="flex items-center gap-3 mb-3">

                        <div className="w-12 h-12 rounded-xl bg-orange-500 flex justify-center items-center text-white text-2xl">

                            🚗

                        </div>

                        <h1 className="text-4xl font-extrabold text-gray-800">

                            Drive

                            <span className="text-orange-500">

                                Ease

                            </span>

                        </h1>

                    </div>


                    <h2 className="text-3xl font-bold text-gray-800">

                        {isLogin

                            ? "Welcome Back"
                            : "Create Account"}

                    </h2>


                    <p className="text-gray-500 text-center mt-2 text-[15px] leading-relaxed">

                        {isLogin

                            ? "Sign in to your Account to Continue"
                            : "Join DriveEase and Start Your Journey Today"}

                    </p>

                </div>


                {/* ERROR */}

                {error && (

                    <div className="mb-5 bg-red-50 border border-red-200 text-red-500 text-sm rounded-xl p-4 text-center">

                        {error}

                    </div>

                )}


                {/* FORM */}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >


                    {/* SIGNUP EXTRA */}

                    {!isLogin && (

                        <>

                            {/* FULL NAME */}
                            <div className="gap-3 grid grid-cols-1 scale-90">


                                <div>

                                    <label className="block text-[15px] font-semibold text-gray-700 mb-2">

                                        Full Name

                                    </label>

                                    <input
                                        type="text"
                                        name="fullName"
                                        required

                                        onChange={handleChange}

                                        placeholder="Enter Full Name"

                                        className="w-full h-[58px] border border-gray-300 rounded-xl px-5 text-[15px] outline-none focus:border-orange-500"
                                    />

                                </div>


                                {/* ADDRESS */}

                                <div>

                                    <label className="block text-[15px] font-semibold text-gray-700 mb-2">

                                        Address

                                    </label>

                                    <input
                                        type="text"
                                        name="address"
                                        required

                                        onChange={handleChange}

                                        placeholder="Enter Address"

                                        className="w-full h-[58px] border border-gray-300 rounded-xl px-5 text-[15px] outline-none focus:border-orange-500"
                                    />

                                </div>


                                {/* DRIVING LICENSE */}

                                <div>

                                    <label className="block text-[15px] font-semibold text-gray-700 mb-2">

                                        Driving License Number

                                    </label>

                                    <input
                                        type="text"
                                        name="drivingLicense"
                                        required

                                        onChange={handleChange}

                                        placeholder="Enter Driving License"

                                        className="w-full h-[58px] border border-gray-300 rounded-xl px-5 text-[15px] outline-none focus:border-orange-500"
                                    />

                                </div>


                                {/* REGISTRATION DATE */}

                                <div>

                                    <label className="block text-[15px] font-semibold text-gray-700 mb-2">

                                        Registration Date

                                    </label>

                                    <input
                                        type="date"
                                        name="registration_Date"
                                        required

                                        onChange={handleChange}

                                        className="w-full h-[58px] border border-gray-300 rounded-xl px-5 text-[15px] outline-none focus:border-orange-500"
                                    />

                                </div>


                                {/* PHONE */}

                                <div>

                                    <label className="block text-[15px] font-semibold text-gray-700 mb-2">

                                        Phone Number

                                    </label>

                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        required

                                        onChange={handleChange}

                                        placeholder="+880 1319946481"

                                        className="w-full h-[58px] border border-gray-300 rounded-xl px-5 text-[15px] outline-none focus:border-orange-500"
                                    />

                                </div>

                            </div>

                        </>

                    )}


                    {/* EMAIL */}
                    <div className="gap-3 grid grid-cols-1 scale-90">

                        <div>

                            <label className="block text-[15px] font-semibold text-gray-700 mb-2">

                                Email Address

                            </label>

                            <input
                                type="email"
                                name="email"
                                required

                                onChange={handleChange}

                                placeholder="abcd@gmail.com"

                                className="w-full h-[58px] border border-gray-300 rounded-xl px-5 text-[15px] outline-none focus:border-orange-500"
                            />

                        </div>


                        {/* PASSWORD */}

                        <div>

                            <label className="block text-[15px] font-semibold text-gray-700 mb-2">

                                Password

                            </label>

                            <input
                                type="password"
                                name="password"
                                required

                                onChange={handleChange}

                                placeholder="••••••••"

                                className="w-full h-[58px] border border-gray-300 rounded-xl px-5 text-[15px] outline-none focus:border-orange-500"
                            />

                        </div>
                    </div>


                    {/* CONFIRM PASSWORD */}

                    {!isLogin && (

                        <div className="gap-3 grid grid-cols-1 scale-90">

                            <label className="block text-[15px] font-semibold text-gray-700 mb-2">

                                Confirm Password

                            </label>

                            <input
                                type="password"
                                name="confirmPassword"
                                required

                                onChange={handleChange}

                                placeholder="••••••••"

                                className="w-full h-[58px] border border-gray-300 rounded-xl px-5 text-[15px] outline-none focus:border-orange-500"
                            />

                        </div>

                    )}


                    {/* REMEMBER */}

                    {isLogin && (

                        <div className="flex justify-between items-center text-sm">

                            <label className="flex items-center text-gray-600 cursor-pointer">

                                <input
                                    type="checkbox"
                                    className="mr-2"
                                />

                                Remember me

                            </label>


                            <button
                                type="button"
                                className="text-orange-500 hover:underline"
                            >

                                Forgot Password?

                            </button>

                        </div>

                    )}


                    {/* BUTTON */}

                    <button
                        type="submit"

                        className="w-full h-[58px] bg-orange-500 hover:bg-orange-600 transition rounded-xl text-white font-semibold text-[17px] mt-2"
                    >

                        {isLogin

                            ? "Sign In"
                            : "Create Account"}

                    </button>

                </form>


                {/* TOGGLE */}

                <div className="text-center mt-7 text-[15px] text-gray-600">

                    {isLogin

                        ? "Don't have an account?"
                        : "Already have an account?"}


                    <button
                        onClick={() => {

                            setIsLogin(!isLogin);

                            setError("");

                        }}

                        className="text-orange-500 font-semibold ml-2 hover:underline"
                    >

                        {isLogin

                            ? "Sign Up"
                            : "Sign In"}

                    </button>

                </div>


                {/* SOCIAL */}

                <div className="mt-10">

                    <div className="relative">

                        <div className="absolute inset-0 flex items-center">

                            <div className="w-full border-t border-gray-300"></div>

                        </div>


                        <div className="relative flex justify-center text-sm">

                            <span className="bg-white px-3 text-gray-500">

                                Or Continue With

                            </span>

                        </div>

                    </div>


                    <div className="grid grid-cols-2 gap-4 mt-6">


                        {/* GOOGLE */}

                        <button
                            className="h-[52px] border border-gray-300 rounded-xl flex justify-center items-center gap-2 hover:bg-gray-50 transition"
                        >

                            <span className="font-bold text-lg">

                                G

                            </span>

                            <span className="font-medium text-gray-700">

                                Google

                            </span>

                        </button>


                        {/* FACEBOOK */}

                        <button
                            className="h-[52px] border border-gray-300 rounded-xl flex justify-center items-center gap-2 hover:bg-gray-50 transition"
                        >

                            <span className="font-bold text-lg">

                                f

                            </span>

                            <span className="font-medium text-gray-700">

                                Facebook

                            </span>

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Auth;