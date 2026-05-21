import {

    useEffect,
    useState

} from "react";

import axios from "axios";


const ManageMaintenance = () => {


    const [maintenance, setMaintenance]
        = useState([]);


    const [showModal, setShowModal]
        = useState(false);




    useEffect(() => {

        fetchMaintenance();

    }, []);




    const fetchMaintenance = async () => {

        try {

            const res = await axios.get(

                "http://localhost:8081/api/maintenance"

            );

            setMaintenance(res.data);

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

                    Manage Maintenance

                </h1>



                <button

                    onClick={() =>
                        setShowModal(true)
                    }

                    className="bg-orange-500 text-white px-8 py-4 rounded-2xl text-xl"

                >

                    Add Maintenance

                </button>

            </div>




            {/* MODAL */}

            {

                showModal && (

                    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">


                        <div className="bg-white w-[700px] rounded-3xl p-10">


                            <h1 className="text-4xl font-bold mb-8">

                                Add Maintenance

                            </h1>



                            <div className="space-y-5">


                                <input

                                    type="text"

                                    placeholder="Vehicle ID"

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="text"

                                    placeholder="Description"

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="number"

                                    placeholder="Cost"

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

                                Vehicle

                            </th>

                            <th>

                                Description

                            </th>

                            <th>

                                Date

                            </th>

                            <th>

                                Cost

                            </th>

                            <th>

                                Status

                            </th>

                        </tr>

                    </thead>



                    <tbody>


                        {

                            maintenance.map((item) => (

                                <tr

                                    key={item.id}

                                    className="border-t"

                                >

                                    <td className="p-5">

                                        {

                                            item.vehicle?.vehicleName

                                        }

                                    </td>



                                    <td>

                                        {

                                            item.description

                                        }

                                    </td>



                                    <td>

                                        {

                                            item.maintenanceDate

                                        }

                                    </td>



                                    <td>

                                        ৳

                                        {

                                            item.maintenanceCost

                                        }

                                    </td>



                                    <td>

                                        <span className="bg-green-100 text-green-600 px-4 py-2 rounded-xl">

                                            Completed

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

export default ManageMaintenance;