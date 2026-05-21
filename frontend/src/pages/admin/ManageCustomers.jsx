import {

    useEffect,
    useState

} from "react";

import axios from "axios";


const ManageCustomers = () => {


    const [customers, setCustomers]
        = useState([]);


    const [showModal, setShowModal]
        = useState(false);




    // FETCH CUSTOMERS

    useEffect(() => {

        fetchCustomers();

    }, []);



    const fetchCustomers = async () => {

        try {

            const res = await axios.get(

                "http://localhost:8081/api/customers"

            );

            setCustomers(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };




    return (

        <div className="p-10">


            {/* TOP */}

            <div className="flex justify-between items-center mb-10">


                <div>

                    <h1 className="text-5xl font-bold">

                        Manage Customers

                    </h1>

                </div>



                <button

                    onClick={() =>
                        setShowModal(true)
                    }

                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold"

                >

                    Add Customer

                </button>

            </div>




            {/* MODAL */}

            {

                showModal && (

                    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">


                        <div className="bg-white w-[700px] rounded-3xl p-10">


                            <h1 className="text-4xl font-bold mb-8">

                                Add Customer

                            </h1>



                            <div className="space-y-5">


                                <input

                                    type="text"

                                    placeholder="Full Name"

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="email"

                                    placeholder="Email"

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="text"

                                    placeholder="Phone Number"

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="text"

                                    placeholder="Address"

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="text"

                                    placeholder="Driving License"

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

                                Name

                            </th>

                            <th>

                                Email

                            </th>

                            <th>

                                Phone

                            </th>

                            <th>

                                Address

                            </th>

                            <th>

                                License

                            </th>

                            <th>

                                Registration Date

                            </th>

                        </tr>

                    </thead>



                    <tbody>


                        {

                            customers.map((customer) => (

                                <tr

                                    key={customer.id}

                                    className="border-t"

                                >

                                    <td className="p-5">

                                        {

                                            customer.fullName

                                        }

                                    </td>



                                    <td>

                                        {

                                            customer.email

                                        }

                                    </td>



                                    <td>

                                        {

                                            customer.phoneNumber

                                        }

                                    </td>



                                    <td>

                                        {

                                            customer.address

                                        }

                                    </td>



                                    <td>

                                        {

                                            customer.drivingLicense

                                        }

                                    </td>



                                    <td>

                                        {

                                            customer.registration_Date

                                        }

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

export default ManageCustomers;