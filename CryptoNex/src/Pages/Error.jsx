import React, { useEffect, useState } from 'react';

const Error = () => {
    const [navbarHeightVh, setNavbarHeightVh] = useState(0);
    const [viewportHeightVh, setViewportHeightVh] = useState(window.innerHeight / window.innerHeight * 100);
    const [divHeightVh, setDivHeightVh] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const newViewportHeightVh = (window.innerHeight / window.innerHeight) * 100;
            setViewportHeightVh(newViewportHeightVh);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const Navbar = document.getElementById("navbar");
        if (Navbar) {
            const navbarHeightPixels = Navbar.offsetHeight;
            const navbarHeightVh = (navbarHeightPixels / window.innerHeight) * 100;
            setNavbarHeightVh(navbarHeightVh);


            // Calculate div height (viewport height in vh minus navbar height in vh)
            const calculatedDivHeightVh = 100 - navbarHeightVh;
            setDivHeightVh(calculatedDivHeightVh);
        }
    }, [viewportHeightVh]);

    return (
        <div className='bg-customBg relative z-0' style={{ height: `calc(${divHeightVh}vh)` }}>
            <h1 className='text-6xl text-center absolute top-[42%] text-white left-1/2 -translate-x-1/2 -translate-y-1/2'>
                Oops...Page Not Found!
            </h1>
        </div>
    );
};

export default Error;
