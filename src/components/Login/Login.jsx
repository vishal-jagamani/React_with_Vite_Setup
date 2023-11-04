import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="m-4">
                <p className="text-md my-4 text-white">Login</p>
                <button className="border px-10 py-2 text-sm" onClick={() => navigate('/')}>
                    Home
                </button>
            </div>
        </>
    );
};

export default Login;
