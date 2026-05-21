import {

    useEffect,
    useState

} from "react";

import axios from "axios";


const ManageEmployees = () => {

    const [employees, setEmployees]
        = useState([]);

    const [showModal, setShowModal]
        = useState(false);



    useEffect(() => {

        fetchEmployees();

    }, []);




    const fetchEmployees = async () => {

        try {

            const res = await axios.get(

                "http://localhost:8081/api/employees"

            );

            setEmployees(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };




    return (

        <div className="p-10">


            {/* TOP */}

            <div className="flex justify-between items-center mb-10">

                <h1 className="text-5xl font-bold">

                    Manage Employees

                </h1>



                <button

                    onClick={() =>
                        setShowModal(true)
                    }

                    className="bg-orange-500 text-white px-8 py-4 rounded-2xl text-xl"

                >

                    Add Employee

                </button>

            </div>




            {/* MODAL */}

            {

                showModal && (

                    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">


                        <div className="bg-white w-[700px] rounded-3xl p-10">


                            <h1 className="text-4xl font-bold mb-8">

                                Add Employee

                            </h1>



                            <div className="space-y-5">


                                <input
                                    type="text"
                                    placeholder="Employee Name"
                                    className="w-full border p-4 rounded-xl"
                                />

                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full border p-4 rounded-xl"
                                />

                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full border p-4 rounded-xl"
                                />

                                <input
                                    type="text"
                                    placeholder="Position"
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

                                Employee

                            </th>


                            <th>

                                Position

                            </th>

                            <th>

                                Hire Date

                            </th>


                            <th>

                                Status

                            </th>

                        </tr>

                    </thead>



                    <tbody>


                        {

                            employees.map((employee) => (

                                <tr
                                    key={employee.id}
                                    className="border-t"
                                >

                                    <td className="p-5">

                                        {

                                            employee.fullName

                                        }

                                    </td>



                                    <td>

                                        {

                                            employee.position

                                        }

                                    </td>



                                    <td>

                                        {

                                            employee.hireDate

                                        }

                                    </td>



                                    <td>

                                        <span className="bg-green-100 text-green-600 px-4 py-2 rounded-xl">

                                            Active

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

export default ManageEmployees;