import React, { useEffect, useState } from 'react'
import bgImage from "./Assets/hero.png"
import { apiCall } from "./redux/coinsSlice"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"
import Animate from './SimpleAnimate'
import WordAnimate from './WordAnimate'
const Home = () => {

    const lineBreak = 310;
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.coins.pending);
    const data = useSelector((state) => state.coins.data);
    useEffect(() => {
        dispatch(apiCall());

    }, [dispatch])



    const handleResize = () => {

        setwindowWidth(window.innerWidth);
    }

    const [windowWidth, setwindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resisze", handleResize);
        };
    }, []);


    return (

        <div className='bg-customBg'>

            <div
                style={{ backgroundImage: `url(${bgImage})` }}
                className='bg-center bg-no-repeat h-[90vh] bg-cover flex items-center justify-center flex-col bg-slate-800'
            >
                <div>
                    <h5 className='text-customYellow text-sm'>Welcome to Cryptonex</h5>
                </div>
                <div className='flex items-center justify-center flex-col  text-white text-center'>
                    <h1 className='text-4xl text-bold w-[100%] mt-4 sm:text-6xl lg:text-7xl'>
                        <WordAnimate text="Easy Way to" />{' '}
                        <span className='text-customYellow'>
                            <WordAnimate text="Bitcoin" />
                            <br />
                        </span>{' '}
                        <WordAnimate text="Key to Success" />
                    </h1>
                    <p className='mt-8 w-[90%] text-md sm:text-lg sm:w-[70%] md:w-[60%] lg:w-[40%]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quis? Cumque, numquam. Nulla, quo
                        amet! Pariatur doloremque expedita laboriosam, iste consequatur magni nulla.
                    </p>
                    <button className='bg-customYellow rounded-md px-6 py-3 mt-8 font-semibold'>
                        Join for free
                    </button>
                </div>
            </div>
            {/* marquee */}
            <marquee className='flex flex-row justify-center items-center h-16 bg-customSlate'>
                {data && data.map((item, index) => (
                    <>
                        <img src={item.image} alt={`Image ${index}`} className='inline mr-4 ' width={40} />
                        <p className='inline text-white mr-14'>
                            {item.name}
                        </p>
                    </>

                ))}
            </marquee>
            <div className='text-white text-center mt-14  ' >
                <h6 className='text-customYellow'>
                    About CryptoNex
                </h6>
                <p className='text-3xl text-white text-center text-bold mt-4 overflow-x-auto'>

                    Simple.Faster.{windowWidth < lineBreak && (<br />)}Reliable
                </p>
            </div>
            {/* main Section */}
            <div className='flex flex-col justify-center items-center mt-6 lg:flex-row lg:w-[90%] lg:mx-auto'>



                <div className='flex flex-col justify-center items-center w-[95%] lg:w-[60%] lg:gap-1 gap-4 md:flex-row'   >
                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/about-us-1.jpg" alt="" className='rounded-lg w-full lg:w-1/2 ' />




                    <div className='w-full lg:w-1/2 lg:flex lg:flex-col lg:gap-0 justify-center ' >
                        <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/about-us-2.jpg" alt="" className='rounded-lg w-full' />
                        <div className='mt-4 lg:mt-1 border bg-customSlate border-slate-500 rounded-lg py-4 lg:py-2 flex items-center '>
                            <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-bitcoin-exchange.svg" className='mr-4 ml-5' />
                            <h1 className='text-white text-lg lg:text-xl text-bold'>
                                Bitcoin Information
                            </h1>
                        </div>
                    </div>

                </div>




                <div className='text-white text-left ml-6 mt-4 lg:w-[50%]'>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        <br /><br />
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.
                    </p>
                    <div>
                        <ol class="list-decimal pl-6">
                            <li class="relative">Designed for everyone</li>
                            <li class="relative">Trade as you go</li>
                            <li class="relative">All tools you want</li>
                            <li class="relative">Automatic conversion</li>
                            <li class="relative">Multiple asset classes</li>
                            <li class="relative">Simple to manage</li>
                            <li class="relative">Scan.Convert.Pay</li>
                            <li class="relative">Quick to set up</li>
                        </ol>
                    </div>
                </div>
            </div>








        </div>

    )
}

export default Home
