import {

    useEffect,
    useState

} from "react";

import axios from "axios";


const ManageBranches = () => {


    const [branches, setBranches]
        = useState([]);


    const [showModal, setShowModal]
        = useState(false);




    useEffect(() => {

        fetchBranches();

    }, []);




    const fetchBranches = async () => {

        try {

            const res = await axios.get(

                "http://localhost:8081/api/branches"

            );

            setBranches(res.data);

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

                    Manage Branches

                </h1>



                <button

                    onClick={() =>
                        setShowModal(true)
                    }

                    className="bg-orange-500 text-white px-8 py-4 rounded-2xl text-xl"

                >

                    Add Branch

                </button>

            </div>




            {/* MODAL */}

            {

                showModal && (

                    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">


                        <div className="bg-white w-[700px] rounded-3xl p-10">


                            <h1 className="text-4xl font-bold mb-8">

                                Add Branch

                            </h1>



                            <div className="space-y-5">


                                <input

                                    type="text"

                                    placeholder="Branch Name"

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="text"

                                    placeholder="Location"

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




            {/* CARDS */}

            <div className="grid grid-cols-2 gap-8">


                {

                    branches.map((branch) => (

                        <div

                            key={branch.id}

                            className="bg-white border rounded-3xl p-8"

                        >

                            <h1 className="text-4xl font-bold mb-5">

                                {

                                    branch.branchName

                                }

                            </h1>



                            <p className="text-2xl text-gray-600">

                                {

                                    branch.location

                                }

                            </p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default ManageBranches;