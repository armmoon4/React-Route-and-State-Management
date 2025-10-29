import React from 'react';
import { FcCancel } from "react-icons/fc";
const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <FcCancel size={138} />
            <h1 className="font-bold text-6xl mt-4">SORRY 404 INVALID FILE NOT FOUND</h1>
        </div>

    );
};

export default ErrorPage;