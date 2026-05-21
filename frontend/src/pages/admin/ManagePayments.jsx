import {

    useEffect,
    useState

} from "react";

import axios from "axios";


const ManagePayments = () => {


    const [payments, setPayments]
        = useState([]);


    const [showModal, setShowModal]
        = useState(false);




    useEffect(() => {

        fetchPayments();

    }, []);




    const fetchPayments = async () => {

        try {

            const res = await axios.get(

                "http://localhost:8081/api/payments"

            );

            setPayments(res.data);

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

                    Manage Payments

                </h1>



                <button

                    onClick={() =>
                        setShowModal(true)
                    }

                    className="bg-orange-500 text-white px-8 py-4 rounded-2xl text-xl"

                >

                    Add Payment

                </button>

            </div>




            {/* MODAL */}

            {

                showModal && (

                    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">


                        <div className="bg-white w-[700px] rounded-3xl p-10">


                            <h1 className="text-4xl font-bold mb-8">

                                Add Payment

                            </h1>



                            <div className="space-y-5">


                                <input

                                    type="text"

                                    placeholder="Rental ID"

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="number"

                                    placeholder="Amount"

                                    className="w-full border p-4 rounded-xl"

                                />


                                <select

                                    className="w-full border p-4 rounded-xl"

                                >

                                    <option>

                                        Select Method

                                    </option>

                                    <option>

                                        Cash

                                    </option>

                                    <option>

                                        Card

                                    </option>

                                    <option>

                                        Bkash

                                    </option>

                                </select>


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

                                Payment ID

                            </th>

                            <th>

                                Rental ID

                            </th>

                            <th>

                                Amount

                            </th>

                            <th>

                                Method

                            </th>

                            <th>

                                Payment Date

                            </th>

                            <th>

                                Status

                            </th>

                        </tr>

                    </thead>



                    <tbody>


                        {

                            payments.map((payment) => (

                                <tr

                                    key={payment.id}

                                    className="border-t"

                                >

                                    <td className="p-5">

                                        p-{payment.id}

                                    </td>



                                    <td>

                                        r-

                                        {

                                            payment.rental?.id

                                        }

                                    </td>



                                    <td>

                                        ৳

                                        {

                                            payment.amount

                                        }

                                    </td>



                                    <td>

                                        {

                                            payment.paymentMethod

                                        }

                                    </td>



                                    <td>

                                        {

                                            payment.paymentDate

                                        }

                                    </td>



                                    <td>

                                        <span className="bg-green-100 text-green-600 px-4 py-2 rounded-xl">

                                            Paid

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

export default ManagePayments;