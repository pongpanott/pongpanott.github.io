import React, { MutableRefObject } from 'react';
import MobileNavbar from './mobile-navbar';
import TabletNavbar from './tablet-navbat';

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 z-50 backdrop-blur-[5px] left-0 w-full flex gap-x-2 px-[18px] py-4 justify-between items-center md:px-8 md:py-4">
                <MobileNavbar />
                <TabletNavbar />
            </nav>
        </>
    );
};

export default Navbar;
