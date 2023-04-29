import React, { MutableRefObject } from 'react';
import Icon from '../../base-ui/icon';
import { AppIconEnum } from '../../base-ui/icon/viewmodel';
import NavbarDrawer from './components/navbar-drawer';
import { useState } from 'react';
import Signature from './components/signature';
import { useWebScroller } from 'common/hooks/web-scroller';
import { useMediaSize } from '../../hooks/media-size';

const MobileNavbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const { handleWebScroll } = useWebScroller();
    const { isMobile } = useMediaSize();

    return isMobile ? (
        <>
            <Signature onClick={() => handleWebScroll()} />
            <button type="button" onClick={() => setIsDrawerOpen(true)}>
                <Icon icon={AppIconEnum.HAMBURGER} iconSize={24} />
            </button>
            <NavbarDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
        </>
    ) : null;
};

export default MobileNavbar;
