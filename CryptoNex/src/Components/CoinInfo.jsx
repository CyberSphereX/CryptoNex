import React from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const CoinInfo = ({ data }) => {
    const isNegative = data.price_change_percentage_24h < 0;

    return (
        <div className='flex border border-slate-500 mr-8 text-white flex-col items-center justify-around  bg-customSlate rounded-lg w-72 h-80'>
            <img src={data.image} className='w-16 mt-5' alt={`Coin ${data.id}`} />
            <h1 className='font-bold text-2xl mt-5'>
                {data.id}
            </h1>
            <div className='flex flex-row mt-3 items-center justify-around w-52'>
                <h1 className='text-2xl font-bold'>
                    ${data.current_price}
                </h1>
                <div className='flex items-center'>
                    <ArrowDropUpIcon style={{ color: isNegative ? 'red' : 'rgb(22 163 74)', transform: "scale(1.5)" }} />
                    <h1 className={`ml-1 ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
                        {data.price_change_percentage_24h}%
                    </h1>
                </div>
            </div>
            <button className="inline-flex items-center animation motion-reduce:hover:ease-in-out border-0 py-2 px-7 bg-yellow-500 rounded text-bold text-lg mt-2 mb-4" style={{ transitionDuration: "0.4s" }}>
                Sign In
            </button>
        </div>
    );
};

export default CoinInfo;
