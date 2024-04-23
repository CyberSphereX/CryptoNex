import React from 'react'
import logo from "../Assets/logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
const Footer = () => {
    return (

        <section className='bg-customSlate' >
            <div className=' flex flex-col md:w-[95%] md:mx-auto md:flex-row md:justify-around xl:w-[60%] xl:mx-auto  '>
                <div className='flex text-white  font-bold text-lg w-[93%] mx-auto mt-10 md:w-[50%] xl:w-[40%]'>
                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-stay-info.svg" alt="" className='w-10 mr-4' />
                    <p className='inline xl:text-2xl'>
                        Stay Informed and Never Miss a CrptoNex Update!
                    </p>
                </div>


                <div className='flex flex-col items-center justify-around border mx-auto border-slate-500 bg-inputColor rounded-md w-[93%] h-32 mt-10 md:flex-row md:h-16 md:justify-between md:w-[50%] '>
                    <input type="text" placeholder='Enter your Email address' className='bg-transparent outline-none text-white  w-[96%] md:w-[67%] md:ml-2  h-12' />



                    <button className='bg-customYellow w-[98%] md:w-56 md:mr-1 h-12 rounded-md text-white font-bold'>
                        Subscribe Now
                    </button>
                </div>

            </div>

            <hr className='border-1 border-opacity-35 mt-10 mb-5 w-[90%] border-slate-500 mx-auto xl:w-[60%] ' />




            {/* logo+Name Div */}
            <div className='ml-4 flex flex-col md:ml-8 text-textColor lg:flex-row lg:justify-between xl:w-[60%] xl:mx-auto'>
                <div className='flex flex-col lg:self-start  lg:w-[30%] lg:mt-5 '>

                    <div className='flex  items-center ' >
                        <div className=' mr-2'>
                            <img src={logo} className='w-20' alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold text-white  '>
                                Crypto<span>Nex</span>
                            </h1>
                        </div>
                    </div>


                    <div className='text-textColor lg:w-[95%] mt-3 font-semibold'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum atque perferendis dolore dignissimos nam.
                        </p>
                    </div>
                    <div className='mt-6  '>
                        <div className='flex justify-between w-[95%] md:w-[25%] lg:w-[65%]'>
                            <FacebookIcon className='scale-110  ' />
                            <XIcon className='scale-110  ' />
                            <LinkedInIcon className='scale-110  ' />
                            <InstagramIcon className='scale-110  ' />
                        </div>
                    </div>
                </div>

                {/* social media platforms */}


                {/* Links */}
                <div className='md:flex flex-row justify-between mt-5 md:mt-10  md:mb-3 lg:w-[60%]'>
                    <div className='md:w-[50%] mb-6 md:mb-0'>
                        <h1 className='text-2xl font-bold  text-white'>
                            Quick Links
                        </h1>
                        <div className='flex flex-col  justify-between'>
                            <Link className='mt-4'>Home</Link>
                            <Link className='mt-4'>About Us</Link>
                            <Link className='mt-4'>Services</Link>
                            <Link className='mt-4'>Pricing</Link>
                            <Link className='mt-4'>Blog</Link>
                        </div>

                    </div>
                    {/* icons */}
                    <div className='w-[70%] md:w-[50%] ' >
                        <h1 className='text-2xl font-bold text-white'>
                            Contact Information
                        </h1>
                        <div className='flex flex-col'>
                            <div className='flex mt-4 '>
                                <LocalPhoneOutlinedIcon className='mr-3' />
                                <h1 >
                                    (+0)123 456 7890
                                </h1>
                            </div>
                            <div className='flex mt-4 '>
                                <EmailIcon className='mr-3' />
                                <h1 >
                                    Info@CryptoNex.com
                                </h1>
                            </div>
                            <div className='flex mt-4 '>
                                <FmdGoodOutlinedIcon className='mr-3' />
                                <h1 >200 East 65th Street 17 No , Australia</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>











            <hr className='border-1 border-opacity-35 mt-10 mb-10 w-[90%] border-slate-500 mx-auto xl:w-[60%] ' />
            <div className='text-textColor'>
                <h1 className='text-center'>
                    Copyright 	&#169; 2024 CryptoNex all rights Reserved.
                </h1>
                <p className='text-center mt-2'>
                    Privacy Policy &nbsp; | &nbsp; Terms Of Use
                </p>
            </div>





        </section>
    )
}

export default Footer
