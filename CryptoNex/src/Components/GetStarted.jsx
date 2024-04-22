import React from 'react'

const GetStarted = ({ statements }) => {
    return (
        <>
            <div className=' text-white border border-slate-500  flex w-[90%] md:w-[28rem] rounded-lg mx-auto items-center flex-col  justify-center gap-10 h-60 lg:h-80 bg-customSlate'>
                <img src={statements.image} className='w-14 lg:w-20' />
                <div className='flex flex-col text-center'>
                    <h1 className='font-bold text-xl'>
                        {statements.first}
                    </h1>
                    <p className='text-customWhite mt-4 w-[94%] mx-auto'>
                        {statements.second}
                    </p>
                </div>
            </div>
        </>
    )
}

export default GetStarted
