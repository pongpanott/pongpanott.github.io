import React, { MutableRefObject } from 'react';
import Signature from './components/signature';
import NavbarItems from './components/navbar-items';
import { useWebScroller } from '../../../hooks/web-scroller';

const TabletNavbar = ({ heroRef }: { heroRef: MutableRefObject<HTMLDivElement | null> }) => {
    const { handleWebScroll } = useWebScroller();

    return (
        <nav className="fixed bg-snow w-full top-0 left-0 px-8 py-4 hidden md:block">
            <div className="w-full max-w-[940px] mx-auto flex justify-between items-center">
                <Signature onClick={() => handleWebScroll(heroRef)} />

                <NavbarItems setIsOpen={() => false} />
            </div>
        </nav>
    );
};

export default TabletNavbar;
