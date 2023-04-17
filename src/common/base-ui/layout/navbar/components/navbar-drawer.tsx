import React from 'react';
import Drawer from '../../../drawer';
import { AppIconEnum } from '../../../icon/viewmodel';
import Icon from '../../../icon';
import NavbarItems from './navbar-items';
import { useMediaSize } from '../../../../hooks/media-size';

type NavbarDrawerProps = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
};

const NavbarDrawer = ({ isOpen, setIsOpen }: NavbarDrawerProps) => {
    const { isMobile } = useMediaSize();

    return isMobile ? (
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="px-6 py-8 flex flex-col items-end">
                <button className="mb-10" onClick={() => setIsOpen(false)}>
                    <Icon icon={AppIconEnum.CLOSE} iconSize={18} />
                </button>

                <NavbarItems setIsOpen={setIsOpen} />
            </div>
        </Drawer>
    ) : null;
};

export default NavbarDrawer;
