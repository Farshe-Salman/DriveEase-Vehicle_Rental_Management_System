import {

    useEffect,
    useState

} from "react";

import axios from "axios";

const ManageVehicles = () => {


    // STATES

    const [vehicles, setVehicles]
        = useState([]);


    const [showModal, setShowModal]
        = useState(false);


    const [formData, setFormData]
        = useState({

            vehicleName: "",

            model: "",

            registrationNo: "",

            manufacturingYear: "",

            pricePerDay: "",

            availabilityStatus: "Available"

        });


    const [image, setImage]
        = useState(null);

    const [editingVehicle, setEditingVehicle]
        = useState(null);

    // FETCH

    useEffect(() => {

        fetchVehicles();

    }, []);



    const fetchVehicles = async () => {

        try {

            const res = await axios.get(

                "http://localhost:8081/api/vehicles"

            );

            setVehicles(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };



    // INPUT CHANGE

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
                e.target.value

        });

    };



    // IMAGE

    const handleImage = (e) => {

        setImage(e.target.files[0]);

    };



    // ADD VEHICLE

    const handleAddVehicle = async (e) => {

        e.preventDefault();


        try {

            const data = new FormData();


            Object.keys(formData)
                .forEach((key) => {

                    data.append(

                        key,

                        formData[key]

                    );

                });


            data.append("image", image);


            await axios.post(

                "http://localhost:8081/api/vehicles/add",

                data

            );


            alert("Vehicle Added");


            setShowModal(false);

            fetchVehicles();

        }

        catch (err) {

            console.log(err);

        }

    };

    const handleUpdateClick = (vehicle) => {

        setEditingVehicle(vehicle);

        setFormData({

            vehicleName:
                vehicle.vehicleName,

            model:
                vehicle.model,

            registrationNo:
                vehicle.registrationNo,

            manufacturingYear:
                vehicle.manufacturingYear,

            pricePerDay:
                vehicle.pricePerDay,

            availabilityStatus:
                vehicle.availabilityStatus

        });

        setShowModal(true);

    };

    const handleUpdateVehicle = async (e) => {

        e.preventDefault();

        try {

            await axios.put(

                `http://localhost:8081/api/vehicles/update/${editingVehicle.id}`,

                formData

            );

            alert("Vehicle Updated");

            setShowModal(false);

            setEditingVehicle(null);

            fetchVehicles();

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

                    Manage Vehicles

                </h1>


                <button

                    onClick={() => {

                        setShowModal(false);

                        setEditingVehicle(null);

                    }}

                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold"

                >

                    Add Vehicle

                </button>

            </div>



            {/* MODAL */}

            {

                showModal && (

                    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">


                        <div className="bg-white w-[700px] rounded-3xl p-10">


                            <h1 className="text-4xl font-bold mb-8">

                                {
                                    editingVehicle
                                        ? "Update Vehicle"
                                        : "Add Vehicle"
                                }

                            </h1>



                            <form

                                onSubmit={
                                    editingVehicle
                                        ? handleUpdateVehicle
                                        : handleAddVehicle
                                }

                                className="space-y-5"

                            >


                                <input

                                    type="text"

                                    name="vehicleName"

                                    placeholder="Vehicle Name"

                                    value={formData.vehicleName}

                                    onChange={handleChange}

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="text"

                                    name="model"

                                    placeholder="Model"

                                    value={formData.model}

                                    onChange={handleChange}

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="text"

                                    name="registrationNo"

                                    placeholder="Registration No"

                                    value={formData.registrationNo}

                                    onChange={handleChange}

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="number"

                                    name="manufacturingYear"

                                    placeholder="Manufacturing Year"

                                    value={formData.manufacturingYear}

                                    onChange={handleChange}

                                    className="w-full border p-4 rounded-xl"

                                />


                                <input

                                    type="number"

                                    name="pricePerDay"

                                    placeholder="Price Per Day"

                                    value={formData.pricePerDay}

                                    onChange={handleChange}

                                    className="w-full border p-4 rounded-xl"

                                />


                                <select

                                    name="availabilityStatus"

                                    onChange={handleChange}

                                    className="w-full border p-4 rounded-xl"

                                >

                                    <option>

                                        Available

                                    </option>

                                    <option>

                                        Not Available

                                    </option>

                                    <option>

                                        Rented

                                    </option>

                                </select>



                                <input

                                    type="file"

                                    onChange={handleImage}

                                    className="w-full border p-4 rounded-xl"

                                />



                                <div className="flex gap-5 pt-5">


                                    <button

                                        type="submit"

                                        className="bg-orange-500 text-white px-8 py-4 rounded-2xl"

                                    >

                                        Add

                                    </button>



                                    <button

                                        type="button"

                                        onClick={() =>
                                            setShowModal(false)
                                        }

                                        className="bg-gray-200 px-8 py-4 rounded-2xl"

                                    >

                                        Cancel

                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                )

            }



            {/* VEHICLES */}

            <div className="bg-white border rounded-3xl overflow-hidden">


                <table className="w-full">


                    <thead className="bg-gray-100">


                        <tr>

                            <th className="p-5">

                                Image

                            </th>

                            <th>

                                Vehicle

                            </th>

                            <th>

                                Model

                            </th>

                            <th>

                                Registration

                            </th>

                            <th>

                                Price

                            </th>

                            <th>

                                Status

                            </th>

                            <th>
                                Action
                            </th>

                        </tr>

                    </thead>



                    <tbody>


                        {

                            vehicles.map((vehicle) => (

                                <tr

                                    key={vehicle.id}

                                    className="border-t"

                                >

                                    <td className="p-5">


                                        <img

                                            src={`http://localhost:8081/uploads/cars/${vehicle.imageName}`}

                                            alt=""

                                            className="w-24 h-24 rounded-2xl object-cover"

                                        />

                                    </td>


                                    <td>

                                        {

                                            vehicle.vehicleName

                                        }

                                    </td>


                                    <td>

                                        {

                                            vehicle.model

                                        }

                                    </td>


                                    <td>

                                        {

                                            vehicle.registrationNo

                                        }

                                    </td>


                                    <td>

                                        ৳

                                        {

                                            vehicle.pricePerDay

                                        }

                                    </td>


                                    <td>

                                        <span className="bg-green-100 text-green-600 px-4 py-2 rounded-xl">

                                            {

                                                vehicle.availabilityStatus

                                            }

                                        </span>

                                    </td>

                                    <td>

                                        <button

                                            onClick={() =>
                                                handleUpdateClick(vehicle)
                                            }

                                            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl"

                                        >

                                            Update

                                        </button>

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

export default ManageVehicles;