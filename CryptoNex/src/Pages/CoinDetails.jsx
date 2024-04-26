import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';
import Footer from '../Components/Footer';
import SimpleAnimateY from '../Assets/SimpleAnimateY';
import SimpleAnimateX from '../Assets/SimpleAnimateX';
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../redux/singleCoinSlice"



const CoinDetails = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { id } = params;

    // Fetch data, loading, and error state from Redux store
    const data = useSelector((state) => state.singleCoin.data);
    const pending = useSelector((state) => state.singleCoin.pending);
    const error = useSelector((state) => state.singleCoin.error);

    useEffect(() => {
        dispatch(apiCall(id));
    }, [dispatch, id]);

    if (pending) {
        // Display loading state
        return (
            <div className="flex flex-col items-center justify-center bg-customBg text-customYellow min-h-[87vh]">
                <div className="-mt-24">
                    <Circles height={80} width={80} color="#f4a641" ariaLabel="circles-loading" visible={true} />
                </div>
                <h1 className="-mr-2 mt-4 text-2xl">Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (

            <div className="min-h-[87vh] flex bg-customBg items-center justify-center">
                <h1 className="-mt-32 text-7xl text-white text-center">
                    API Error...!
                    <br />
                    Please Try again Later
                </h1>
            </div>
        );
    }
    return (
        <>

            {
                data && (
                    <>
                        <div className="bg-customBg min-h-[87vh] text-white">
                            <div className="flex flex-col sm:min-h-[87vh] justify-between w-[97%] sm:w-[95%] md:w-[80%] mx-auto items-center">
                                <SimpleAnimateY>
                                    <div className="mt-16">
                                        <img src={data.image.large} className="z-[-999]" />
                                        <h1 className="text-center text-4xl font-semibold mt-2">
                                            {data.id && data.id.charAt(0).toUpperCase() + data.id.slice(1)}
                                        </h1>
                                        <h1 className="text-center text-xl mt-2">Rank #{data.market_cap_rank}</h1>
                                    </div>
                                </SimpleAnimateY>

                                <SimpleAnimateX classes="my-auto flex flex-wrap flex-col mt-12 mb-48 xl:ml-20 w-[100%]" xval={-200}>
                                    <div className="flex justify-evenly flex-wrap items-center">
                                        <h1 className="text-3xl mb-10 text-center">
                                            <span className="text-customYellow font-semibold"> Price: </span>{data.market_data.current_price.usd} $
                                        </h1>
                                        <h1 className="text-3xl mb-10 text-center">
                                            <span className="text-customYellow font-semibold"> Symbol:</span> {data.symbol}
                                        </h1>
                                        <h1 className="text-3xl mb-10 text-center">
                                            <span className="text-customYellow font-semibold"> 24h Price Change: </span>
                                            <span style={{ color: String(data.market_data.price_change_percentage_24h).includes('-') ? 'red' : 'green' }}>
                                                {data.market_data.price_change_percentage_24h}%
                                            </span>
                                        </h1>
                                    </div>
                                    <hr className="border-1 border-opacity-35 mt-5 mb-5 w-[100%] border-slate-500 mx-auto" />
                                    <p
                                        className="mx-auto mt-4 text-left w-[95%] max-h-80 overflow-y-auto text-lg"
                                        dangerouslySetInnerHTML={{
                                            __html: data.description.en.replace(/<a /g, '<a class="text-customYellow" ')

                                        }}
                                    />
                                </SimpleAnimateX>
                            </div>
                        </div>


                        <Footer />
                    </>
                )
            }



        </>
    );
};

export default CoinDetails;
