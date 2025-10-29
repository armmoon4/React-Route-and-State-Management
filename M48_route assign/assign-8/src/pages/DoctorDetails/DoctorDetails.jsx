import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FcElectricalSensor } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { addToStoredDB } from '../../utility/addToDB';
import { ToastContainer} from 'react-toastify';
const DoctorDetails = () => {
    const { id } = useParams();
    const doctorId = parseInt(id);
    const data = useLoaderData();
    const singleDoctor = data.find(doctor => doctor.id === doctorId)
    const { image, name, education, specialty, workingAt, registrationNumber, availability, consultationFee } = singleDoctor;

    const handleAppointed= id => {
        addToStoredDB(id);
    }



    return (
        <div className="mx-auto p-6 bg-white rounded-2xl shadow-xl font-sans mt-7">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                    <img
                        src={image}
                        alt="Dr. Cameron Williamson"
                        className="w-48 h-48 rounded-lg object-cover"
                    />
                </div>
                <ToastContainer />
                <div className="flex-grow text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-900">{name}</h2>
                    <p className="text-gray-700 mt-1">{education}</p>
                    <p className="text-gray-700">{specialty}</p>

                    <p className="text-gray-600 mt-4 text-sm">Working at</p>
                    <p className="text-lg font-semibold text-gray-800">{workingAt}</p>

                    <div className="flex items-center justify-center md:justify-start text-gray-600 mt-5 border-t border-b py-3 border-gray-200">
                        <FcElectricalSensor size={18} />
                        <span>Reg No: BD {registrationNumber}</span>
                    </div>

                    <div className="mt-5 text-center md:text-left">
                        <p className="text-gray-600">Availability</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                            {
                                availability.map((day) => (
                                    <span
                                        key={day}
                                        className="bg-orange-100 text-orange-800 text-sm font-medium px-4 py-1 rounded-full"
                                    >
                                        {day}
                                    </span>
                                ))
                            }
                        </div>
                    </div>

                    <div className="mt-5 text-center md:text-left">
                        <p className="text-gray-600">
                            Consultation Fee:
                            <span className="text-blue-600 font-bold ml-2">{consultationFee}</span>
                            <span className="text-gray-500 ml-1">(incl. Vat)</span>
                            <span className="text-blue-600 font-semibold ml-1 cursor-pointer">Per consultation</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto p-6 bg-white rounded-2xl shadow-xl font-sans">
                <h2 className="text-2xl font-bold text-gray-900 text-center pb-4 border-b border-gray-200 mb-6">
                    Book an Appointment
                </h2>

                <div className="flex justify-between items-center mb-6">
                    <p className="text-gray-700 text-lg font-medium">Availability</p>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full">
                        Doctor Available Today
                    </span>
                </div>

                <div className="flex items-start p-4 mb-6 text-orange-800 bg-orange-50 rounded-lg" role="alert">
                    <FcCancel size={18} />
                    <div className="ml-3 text-sm font-medium">
                        Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                    </div>
                </div>

                <button onClick={()=> handleAppointed(id)} className="w-full py-2 px-5 text-lg font-semibold text-white bg-blue-600 rounded-2xl hover:bg-blue-700 transition-colors hover:cursor-pointer">
                    Book Appointment Now
                </button>
            </div>

        </div>
    );
};

export default DoctorDetails;