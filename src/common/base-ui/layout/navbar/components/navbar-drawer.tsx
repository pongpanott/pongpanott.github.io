import { BaseComponentProps } from '@/common/types/base-component';
import React from 'react';
import Drawer from '../../../drawer';
import { navbarItems } from '@/common/constants/navbar-items';
import { AppIconEnum } from '../../../icon/viewmodel';
import Icon from '../../../icon';
import NavbarItems from './navbar-items';

type NavbarDrawerProps = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
};

const NavbarDrawer = ({ isOpen, setIsOpen }: NavbarDrawerProps) => {
    return (
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="px-6 py-8 flex flex-col items-end">
                <button className="mb-10" onClick={() => setIsOpen(false)}>
                    <Icon icon={AppIconEnum.CLOSE} iconSize={18} />
                </button>

                <NavbarItems setIsOpen={setIsOpen} />
            </div>
        </Drawer>
    );
};

export default NavbarDrawer;
