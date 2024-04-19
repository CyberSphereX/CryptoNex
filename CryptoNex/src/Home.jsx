import React, { useEffect } from 'react'
import bgImage from "./Assets/hero.png"
import { apiCall } from "./redux/coinsSlice"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {


    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.coins.pending);
    const data = useSelector((state) => state.coins.data);



    useEffect(() => {
        dispatch(apiCall());

    }, [dispatch])

    console.log(isLoading);



    return (
        <>
            <div style={{ backgroundImage: `url(${bgImage})` }} className='bg-center bg-no-repeat h-[60vh] bg-cover flex items-center , justify-center flex-col bg-slate-800'     >
                <div >
                    <h5 className='text-customYellow text-sm' >
                        Welcome to Cryptonex
                    </h5>
                </div>
                <div className='flex items-center justify-center flex-col text-white text-center'>
                    <h1 className='text-4xl  text-bold w-[70%] mt-6'>
                        Easy Way to BitCoin Key to Success.
                    </h1>
                    <p className='mt-10'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quis? Cumque, numquam. Nulla, quo amet! Pariatur doloremque expedita laboriosam, iste consequatur magni nulla.
                    </p>
                </div>
            </div>
            <marquee className='flex flex-row justify-center items-center h-16 bg-customSlate'>
                {data && data.map((item, index) => (
                    <>
                        <img key={index} src={item.image} alt={`Image ${index}`} className='inline mr-4 '  width={40} />
                        <p className='inline text-white mr-14'>
                            {item.name}
                        </p>
                    </>

                ))}
            </marquee>
        </>
    )
}

export default Home
