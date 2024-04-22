import React from 'react'

const Footer = () => {
    return (

        <>
            <div className='bg-customSlate flex flex-col items-center md:flex-row md:justify-around   '>
                <div className='flex text-white font-bold text-lg w-[90%] mx-auto mt-10 md:w-[50%]'>
                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-stay-info.svg" alt="" className='w-10 mr-4' />
                    <p className='inline xl:text-2xl w-[40%]'>
                        Stay Informed and Never Miss a CrptoNex Update!
                    </p>
                </div>


                <div className='flex flex-col items-center justify-around border  border-slate-500 bg-inputColor rounded-md w-[90%] h-32 mt-10 md:flex-row md:h-16 md:justify-between md:w-[50%] '>
                    <input type="text" placeholder='Enter your Email address' className='bg-transparent outline-none text-white  w-[96%] md:w-[67%] md:ml-2  h-12' />
                    <button className='bg-customYellow w-[96%] md:w-56 md:mr-1 h-12 rounded-md text-white font-bold'>
                        Subscribe Now
                    </button>
                </div>
            </div>
            {/* <hr className='border-1 border-opacity-35 mt-10 mb-10 w-[90%] border-slate-500 ' /> */}

        </>
    )
}

export default Footer
