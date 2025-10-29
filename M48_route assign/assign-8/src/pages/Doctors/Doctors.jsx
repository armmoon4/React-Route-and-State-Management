import React, { Suspense, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({ data }) => {
    // const [allDoctors , setAllDoctors] = useState([]); 

    // useEffect(()=> {
    //     fetch('doctorData.json')
    //     .then(res=> res.json())
    //     .then(data => {
    //         setAllDoctors(data);
    //     })
    // },[])
    // console.log(data)

    const [showAll, setShowAll] = useState(false);
    const doctorsToShow = showAll ? data : data.slice(0, 6);
    return (
        <div>

            <div className='items-center justify-center text-center mt-9'>
                <h2 className='font-bold text-4xl'>Our Best Doctors</h2>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>


            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-6'>
                    {
                        doctorsToShow.map((singleDoctor) => <Doctor key={singleDoctor.id} singleDoctor={singleDoctor}></Doctor>)
                    }
                </div>
            </Suspense>

            <div className="text-center mt-6">
                <button
                    onClick={() => setShowAll(true)}
                    className="btn rounded-full bg-blue-600 text-white px-8 py-2 font-semibold hover:bg-blue-700 transition"
                >
                    View All Doctors
                </button>
            </div>
        </div>
    );
};

export default Doctors;