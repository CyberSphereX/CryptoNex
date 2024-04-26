import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { motion } from 'framer-motion';
import { Home as HomeIcon, Store as StoreIcon, Contacts as ContactsIcon, Login as LoginIcon } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const links = [
        { name: 'Home', to: '/home', icon: <HomeIcon className='text-customYellow' /> },
        { name: 'Markets', to: '/markets', icon: <StoreIcon className='text-customYellow' /> },
        { name: 'Contact Us', to: '/', icon: <ContactsIcon className='text-customYellow' /> },
        { name: 'Sign In', to: '/', icon: <LoginIcon className='text-customYellow' /> }
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
        <header className="text-gray-600 body-font  bg-customSlate flex items-center  z-50 top-0 w-full h-24 sticky" id='navbar'>
            <div className="mx-auto flex flex-wrap p-5 items-center sm:w-[85%] justify-between w-[100%]">
                {/* Logo Link */}
                <Link to="/" className="flex title-font font-medium items-center text-gray-900">
                    <img src={logo} alt="CryptoNex Logo" className="sm:h-20 h-14" />
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
                    <nav className="flex flex-wrap  items-center text-base justify-around xl:w-[35%] lg:w-2/3  ">
                        {links.map((comp, index) => (
                            comp.name !== "Sign In" && (
                                <Link
                                    key={index}
                                    className="mr-5 hover:text-yellow-500 text-bold text-slate-300"
                                    to={comp.to}
                                    style={{ transitionDuration: "0.4s" }}
                                >
                                    {comp.name}
                                </Link>
                            )
                        ))}
                        <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-500 rounded text-base mt-4 md:mt-0 hover:text-white" style={{ transitionDuration: "0.4s" }}>
                            Sign In
                        </button>
                    </nav>
                )}
                {/* Mobile Navigation */}
                {screenWidth < TabScreenSize && (
                    <motion.nav
                        initial={{ height: 0 }}
                        animate={{ height: navVisible ? '50vh' : 0 }}
                        className="w-full bg-customSlate overflow-hidden absolute top-24 sm:top-24 flex items-center justify-center left-0"
                    >
                        <div className="flex flex-col items-center text-base justify-between h-[90%] py-4">
                            {links.map((comp, index) => (
                                <Link
                                    key={index}
                                    to={comp.to}
                                    className="text-customYellow text-lg hover:text-yellow-500 transition duration-300"
                                    onClick={closeNav}
                                >
                                    {comp.icon} {comp.name}
                                </Link>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;
