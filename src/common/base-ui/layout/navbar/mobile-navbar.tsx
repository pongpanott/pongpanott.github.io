import React from 'react';
import Icon from '../../icon';
import { AppIconEnum } from '../../icon/viewmodel';
import NavbarDrawer from './components/navbar-drawer';
import { useState } from 'react';
import { navbarItems } from '@/common/constants/navbar-items';
import Signature from './components/signature';

const MobileNavbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 bg-snow w-full flex gap-x-2 px-[18px] py-4 justify-between items-center">
                <Signature />

                <button type="button" onClick={() => setIsDrawerOpen(true)}>
                    <Icon icon={AppIconEnum.HAMBURGER} iconSize={24} />
                </button>
            </nav>

            <NavbarDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
        </>
    );
};

export default MobileNavbar;
