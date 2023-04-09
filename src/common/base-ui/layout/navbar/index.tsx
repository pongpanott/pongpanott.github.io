import React from 'react';
import MobileNavbar from './mobile-navbar';
import { useMediaSize } from '@/common/hooks/media-size';
import TabletNavbar from './tablet-navbat';

const Navbar = () => {
    const { isMobile } = useMediaSize();

    return isMobile ? <MobileNavbar /> : <TabletNavbar />;
};

export default Navbar;
