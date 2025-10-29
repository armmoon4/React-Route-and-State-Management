import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredDoctor } from '../../utility/addToDB';
import Doctor from '../Doctor/Doctor';
import SectionOne from './SectionOne';
import { ToastContainer} from 'react-toastify';

const MyBooking = () => {
    const [doctorList, setDoctorList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedDoctorData = getStoredDoctor();
        // You might not need parseInt if the IDs are already numbers
        // If your IDs are strings (like from useParams), keep parseInt
        const ConvertedStoredDoctor = storedDoctorData.map(id => parseInt(id))
        
        if (data) { // Ensure data has loaded before filtering
            const doctorList = data.filter(doctor => ConvertedStoredDoctor.includes(doctor.id))
            setDoctorList(doctorList);
        }
    }, [data]) // 1. Add 'data' as a dependency


    // 2. Add the handleCancel function
    const handleCancel = (canceledId) => {
        // Update the state to remove the canceled doctor
        // This will make React re-render the list
        setDoctorList(prevDoctors =>
            prevDoctors.filter(doctor => doctor.id !== canceledId)
        );
    }


    return (
        <div>
            <div>
                {/* ... */}
            </div>

                <ToastContainer />
            <div className='text-center items-center mb-8'>
                <h1 className='font-bold text-2xl mt-6'>My Today Appointments</h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            {
                doctorList.map(d => (
                    <SectionOne 
                        key={d.id} 
                        d={d} 
                        onCancel={handleCancel} // 3. Pass the function as a prop
                    />
                ))
            }
        </div>
    );
};

export default MyBooking;