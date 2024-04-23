import React from 'react'
import SimpleAnimateY from "../Assets/SimpleAnimateY"

const GetStarted = () => {
    return (
        <div className='flex flex-col gap-10 mt-16  md:flex-row md:w-[98%] 2xl:w-[70%] 2xl:gap-16 md:mx-auto ]'>

            <SimpleAnimateY delay={0.3} classes={"text-white border bg-customSlate border-slate-500  flex w-[90%] md:w-[28rem] rounded-lg mx-auto items-center flex-col  justify-center gap-10 h-60 lg:h-80"}  >

                <>
                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-how-it-work-1.svg" className='w-14 lg:w-20' />
                    <div className='flex flex-col text-center'>
                        <h1 className='font-bold text-xl'>
                            Download crypto Wallet
                        </h1>
                        <p className='text-customWhite mt-4 w-[94%] mx-auto'>
                            Get on PC or Mobile to create,send,receive bitcoins
                        </p>
                    </div>
                </>

            </SimpleAnimateY>

            <SimpleAnimateY delay={0.6} classes={" text-white border border-slate-500  flex w-[90%] md:w-[28rem] rounded-lg mx-auto items-center flex-col  justify-center gap-10 h-60 lg:h-80 bg-customSlate"}>


                <>
                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-how-it-work-2.svg" className='w-14 lg:w-20' />
                    <div className='flex flex-col text-center'>
                        <h1 className='font-bold text-xl'>
                            Add Coins to your Wallet
                        </h1>
                        <p className='text-customWhite mt-4 w-[94%] mx-auto'>
                            Add bitcoins you've created or exchanged via credit card
                        </p>
                    </div>
                </>


            </SimpleAnimateY>
            <SimpleAnimateY delay={0.8} classes={"text-white border border-slate-500  flex w-[90%] md:w-[28rem] rounded-lg mx-auto items-center flex-col  justify-center gap-10 h-60 lg:h-80 bg-customSlate"}>


                < >
                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-how-it-work-3.svg" className='w-14 lg:w-20' />
                    <div className='flex flex-col text-center'>
                        <h1 className='font-bold text-xl'>
                            Buy/Sell with Wallet
                        </h1>
                        <p className='text-customWhite mt-4 w-[94%] mx-auto'>
                            Enter receiver's address,specify the ammount and send
                        </p>
                    </div>
                </>
            </SimpleAnimateY>

        </div>
    )
}

export default GetStarted
