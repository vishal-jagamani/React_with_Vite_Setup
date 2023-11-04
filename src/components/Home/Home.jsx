import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeDemo } from '../../redux/slices/DemoSlice';
import { useGetCatFactsQuery } from '../../redux/api/DemoAPI';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const demo = useSelector((state) => state?.demo?.name);
    const [stateValue, setStateValue] = useState('');
    const handleChangeStateButtonClick = () => {
        dispatch(changeDemo(stateValue));
        setStateValue('');
    };
    const { data: data } = useGetCatFactsQuery('/fact');
    console.log('demo', data);

    return (
        <>
            <div className="m-4">
                <button className="my-0 border px-10 py-2 text-sm" onClick={() => navigate('/login')}>
                    Login
                </button>
                <p className="text-md p-5 text-white">Home</p>
                <div className="flex w-56 flex-col items-center">
                    <input
                        type="text"
                        className="my-2 rounded-xl px-3 py-2"
                        placeholder="Enter value"
                        value={stateValue}
                        onChange={(e) => setStateValue(e?.target?.value)}
                    />
                    <button className="my-2 w-44 truncate border px-3 py-2 text-sm" onClick={() => handleChangeStateButtonClick()}>
                        Change state value
                    </button>
                    <p>
                        Redux state value: <b>{demo}</b>
                    </p>
                </div>
                <div className="mt-5">
                    <p>
                        API Call Response: <b>{data?.fact}</b>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;
