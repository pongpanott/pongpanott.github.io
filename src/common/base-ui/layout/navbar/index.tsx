import React, { MutableRefObject } from 'react';
import MobileNavbar from './mobile-navbar';
import TabletNavbar from './tablet-navbat';

const Navbar = ({ heroRef }: { heroRef: MutableRefObject<HTMLDivElement | null> }) => {
    return (
        <>
            <MobileNavbar heroRef={heroRef} />
            <TabletNavbar heroRef={heroRef} />;
        </>
    );
};

export default Navbar;
