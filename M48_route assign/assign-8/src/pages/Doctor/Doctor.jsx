import React from 'react';

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

    console.log(singleDoctor)
    const {experience ,name ,education,registrationNumber } = singleDoctor;
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-lg font-sans">
            <img
                className="w-full rounded-lg"
                src={singleDoctor.image}
                alt="Dr. Cameron Williamson"
                onError={(e) => { e.target.src = 'https://placehold.co/400x280/e0e0e0/333?text=Image+Missing'; }}
            />
            <div className="flex gap-2 mt-4">
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                    Available
                </span>
                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                    {experience} Experience
                </span>
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-600 mt-1">{education}</p>

                <div className="flex items-center text-sm text-gray-600 mt-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 flex-shrink-0"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9 12h2a2 2 0 1 0 0-4h-2v4"></path>
                        <path d="M13 15l-2-3"></path>
                    </svg>
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
    );
};

export default Doctor;