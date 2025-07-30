import React from 'react';
import Signature from './components/signature';
import NavbarItems from './components/navbar-items';
import { useWebScroller } from '../../hooks/web-scroller';
import { useMediaSize } from '../../hooks/media-size';

const TabletNavbar = () => {
    const { handleWebScroll } = useWebScroller();
    const { isMobile } = useMediaSize();

    return !isMobile ? (
        <div className="w-full max-w-[940px] mx-auto flex justify-between items-center">
            <Signature onClick={() => handleWebScroll()} />
            <NavbarItems setIsOpen={() => false} />
        </div>
    ) : null;
};

export default TabletNavbar;
