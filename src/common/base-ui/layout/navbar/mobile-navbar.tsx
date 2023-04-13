import React, { MutableRefObject } from 'react';
import Icon from '../../icon';
import { AppIconEnum } from '../../icon/viewmodel';
import NavbarDrawer from './components/navbar-drawer';
import { useState } from 'react';
import Signature from './components/signature';
import { useWebScroller } from 'common/hooks/web-scroller';

const MobileNavbar = ({ heroRef }: { heroRef: MutableRefObject<HTMLDivElement | null> }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const { handleWebScroll } = useWebScroller();

    return (
        <>
            <nav className="fixed md:hidden top-0 left-0 bg-snow w-full flex gap-x-2 px-[18px] py-4 justify-between items-center">
                <Signature onClick={() => handleWebScroll(heroRef)} />

                <button type="button" onClick={() => setIsDrawerOpen(true)}>
                    <Icon icon={AppIconEnum.HAMBURGER} iconSize={24} />
                </button>
            </nav>

            <NavbarDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
        </>
    );
};

export default MobileNavbar;
