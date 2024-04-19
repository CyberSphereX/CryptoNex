import React from 'react'
import bgImage from "./Assets/hero.png"


const Home = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${bgImage})` }} className='bg-center bg-no-repeat h-[60vh] bg-cover flex items-center , justify-center flex-col'     >
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
            <marquee behavior="" direction="">
                <img src={bgImage}  className='rounded-full' />
            </marquee>
        </>
    )
}

export default Home
