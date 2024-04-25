import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';

const CoinDetails = () => {
    const params = useParams();
    const { id } = params;
    const [data, setData] = useState(null);
    const [navbarHeightVh, setNavbarHeightVh] = useState(100);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`, {
                    headers: {
                        accept: 'application/json',
                        'x-cg-demo-api-key': 'CG-8QaRqe6fL3SXzBNNhuKrgUvZ'
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();

        // Calculate navbar height and update state
        const Navbar = document.getElementById("navbar");
        if (Navbar) {
            const navbarHeight = Navbar.offsetHeight;
            const newNavbarHeightVh = 100 - ((navbarHeight / window.innerHeight) * 100);
            setNavbarHeightVh(newNavbarHeightVh);
        }
    }, [id]);

    return (
        <>
            {data ? (
                <section className="text-gray-600 bg-customBg min-h-[86.8vh]">
                    <div className="container px-5 mx-auto py-24">
                        <div className="lg:w-[95%] mx-auto flex flex-wrap">
                            <img
                                className="sm:w-[60%] md:w-[60%] mx-auto object-cover object-center lg:w-[40%] rounded"
                                src={data.image.large}
                                alt={data.name}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-6xl mb-20 font-bold text-white title-font tracking-widest">{data.name}</h2>
                                <p className="leading-relaxed">{data.description.en}</p>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <div className='flex flex-col text-customYellow items-center justify-center bg-customBg' style={{ minHeight: `${navbarHeightVh}vh` }}>
                    <div className='-mt-24'>
                        <Circles
                            height="80"
                            width="80"
                            color="#f4a641"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                    <h1 className='-mr-2 mt-4 text-2xl'>Loading...</h1>
                </div>
            )}
        </>
    );
};

export default CoinDetails;
