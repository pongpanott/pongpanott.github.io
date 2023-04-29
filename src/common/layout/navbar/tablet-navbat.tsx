import React, { MutableRefObject } from 'react';
import Signature from './components/signature';
import NavbarItems from './components/navbar-items';
import { useWebScroller } from '../../hooks/web-scroller';
import { useMediaSize } from '../../hooks/media-size';

const TabletNavbar = ({ heroRef }: { heroRef: MutableRefObject<HTMLDivElement | null> }) => {
    const { handleWebScroll } = useWebScroller();
    const { isMobile } = useMediaSize();

    return !isMobile ? (
        <div className="w-full max-w-[940px] mx-auto flex justify-between items-center">
            <Signature onClick={() => handleWebScroll(heroRef)} />

            <NavbarItems setIsOpen={() => false} />
        </div>
    ) : null;
};

export default TabletNavbar;
