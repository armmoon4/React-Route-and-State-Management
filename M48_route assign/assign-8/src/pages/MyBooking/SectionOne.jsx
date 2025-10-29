import React from 'react';
import { removeFromStoredDB } from '../../utility/addToDB';
import { ToastContainer } from 'react-toastify';
const SectionOne = ({ d, onCancel }) => {

    const handleCancelAppointment = () => {
        removeFromStoredDB(d.id);
        onCancel(d.id);
    }

    return (
        <div className="mx-auto p-5 bg-white rounded-2xl shadow-lg font-sans mb-5">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">{d.name}</h3>
                    <p className="text-sm text-gray-600">{d.education}</p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                    <p className="text-sm text-gray-700">Appointment Fee: {d.consultationFee} Taka + Vat</p>
                </div>
            </div>
            <div className="border-t border-dotted border-gray-300 my-4"></div>
            <button
                onClick={handleCancelAppointment}
                className="w-full text-center text-red-600 font-semibold border-2 border-red-500 rounded-full py-2.5 mt-2 hover:bg-red-50 transition-colors hover:cursor-pointer">
                Cancel Appointment
            </button>
        </div>
    );
};

export default SectionOne;