import React from 'react';
import { FcElectricalSensor } from "react-icons/fc";
import { Link } from 'react-router';
const Doctor = ({ singleDoctor }) => {

    //     {
    //   "id": 2,
    //   "image": "https://randomuser.me/api/portraits/thumb/women/2.jpg",
    //   "name": "Dr. Emily Johnson",
    //   "education": "MBBS, MS in Neurology",
    //   "specialty": "Neurology",
    //   "experience": "12 years",
    //   "registrationNumber": "MED002",
    //   "availability": [
    //     "Monday",
    //     "Wednesday",
    //     "Thursday",
    //     "Saturday"
    //   ],
    //   "consultationFee": "$180",
    //   "workingAt": "NeuroCare Clinic"
    // }


    // console.log(singleDoctor)
    const { experience, name, education, registrationNumber , id } = singleDoctor;
    return (
        <Link to={`/doctorDeatils/${id}`}>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-lg font-sans">
                <img
                    className="w-full rounded-lg"
                    src={singleDoctor.image}
                    alt="Dr. Cameron Williamson"
                    onError={(e) => { e.target.src = 'https://placehold.co/400x280/e0e0e0/333?text=Image+Missing'; }}
                />
                <div className="flex gap-2 mt-2">
                    <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                        Available
                    </span>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                        {experience} Experience
                    </span>
                </div>
                <div className="mt-2">
                    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{education}</p>

                    <div className="flex items-center text-sm text-gray-600 mt-2 gap-1">
                        <FcElectricalSensor size={18} />
                        <span>Reg No: {registrationNumber}</span>
                    </div>
                </div>

                <a
                    href="#"
                    className="block w-full text-center text-blue-600 font-semibold border border-blue-600 rounded-full py-2.5 mt-5 hover:bg-blue-50 transition-colors"
                >
                    View Details
                </a>

            </div>
        </Link>
    );
};

export default Doctor;