import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { motion, AnimatePresence, color } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import ContactsIcon from '@mui/icons-material/Contacts';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const links = [
        { name: 'Home', to: '/home', icon: <HomeIcon /> },
        { name: 'Markets', to: '/markets', icon: <StoreIcon /> },
        { name: 'Contact Us', to: '/', icon: <ContactsIcon /> },
        { name: 'Sign In', to: '/', icon: <LoginIcon /> }
    ];

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [navVisible, setNavVisible] = useState(false);
    const TabScreenSize = 1024;

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const toggleNav = () => {
        setNavVisible(!navVisible);
    };
    const closeNav = () => {
        setNavVisible(false);
    };

    return (
        <header className="text-gray-600 body-font bg-customSlate flex items-center z-[100] "  id='navbar'>
            <div className="mx-auto flex flex-wrap p-5 items-center sm:w-[85%] justify-between w-[100%]">
                {/* Logo Link */}
                <Link to="/home" className="flex title-font font-medium items-center  text-gray-900 ">
                    <img src={logo} alt="Error loading the logo" className="sm:h-20 h-14 " />
                    <div className="flex align-middle justify-center">
                        <p className="ml-3 text-xl text-white">Crypto</p>
                        <p className="text-yellow-500 text-xl">nex</p>
                    </div>
                </Link>
                {/* Open/Close Button (Mobile) */}
                {screenWidth < TabScreenSize && (
                    <button onClick={toggleNav} className="block lg:hidden focus:outline-none">
                        {navVisible ? <CloseIcon style={{ color: "white" }} /> : <MenuIcon style={{ color: "white" }} />}
                    </button>
                )}
                {/* Navigation (Desktop) */}
                {screenWidth >= TabScreenSize && (
                    <nav className="flex flex-wrap items-center text-base justify-around xl:w-[35%] lg:w-2/3">
                        {links.map((comp, index) => (
                            comp.name != "Sign In" && (

                                <Link key={index} className="mr-5 hover:text-yellow-500 text-bold text-slate-300 animation motion-reduce:hover:ease-in-out" to={comp.to} style={{ transitionDuration: "0.4s" }}>
                                    {comp.name}
                                </Link>
                            )
                        ))}
                        <button className="inline-flex items-center animation motion-reduce:hover:ease-in-out bg-gray-100 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-500 rounded text-base mt-4 md:mt-0" style={{ transitionDuration: "0.4s" }}>
                            Sign In
                        </button>
                    </nav>
                )}
                {/* Mobile Navigation */}
                {screenWidth < TabScreenSize && (
                    <AnimatePresence>
                        {navVisible && (
                            <motion.nav
                                initial={{ height: "0vh" }}
                                animate={{ height: '100vh', pointerEvents: 'auto', height: "50vh" }}
                                exit={{ opacity: 0, pointerEvents: 'none', height: "0vh", }}
                                transition={{ duration: "0s", delay: 0, type: 'spring', stiffness: 90 }}
                                className="flex flex-col align-middle bg-customYellow outline outline-slate-600 outline-1 items-center w-full top-[12%] text-base justify-around absolute left-0"
                            >
                                <div className='flex flex-col h-[90%] justify-around '>
                                    {links.map((comp, index) => (
                                        <Link
                                            key={index}
                                            className=" hover:text-yellow-500 text-bold text-slate-900 text-center"
                                            to={comp.to}
                                            onClick={closeNav}
                                        >
                                            <div>{comp.icon}</div>
                                            {comp.name}
                                        </Link>
                                    ))}
                                </div>
                            </motion.nav>
                        )}
                    </AnimatePresence>
                )}

            </div>
        </header>
    );
};

export default Navbar;
