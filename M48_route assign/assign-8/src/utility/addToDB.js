import { toast } from 'react-toastify';

const getStoredDoctor = () => {
    const storedDoctorSTR = localStorage.getItem('doctorList');
    if (storedDoctorSTR) {
        const storedDoctorData = JSON.parse(storedDoctorSTR);
        return storedDoctorData;
    } else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedDoctorData = getStoredDoctor();

    if (storedDoctorData.includes(id)) {
        toast("Appointment Already Booked")
    } else {
        storedDoctorData.push(id);
        const data = JSON.stringify(storedDoctorData);
        localStorage.setItem('doctorList', data);
        toast("Appointment Added")
    }
}

const removeFromStoredDB = (id) => {
    const storedDoctorData = getStoredDoctor();

    const remainingDoctors = storedDoctorData.filter(doctorId => parseInt(doctorId) !== id);
    
    const data = JSON.stringify(remainingDoctors);
    localStorage.setItem('doctorList', data);
    toast("Appointment Canceled");
}

export { addToStoredDB, getStoredDoctor, removeFromStoredDB }