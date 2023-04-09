import React from 'react';
import Signature from './signature';
import Icon from '../../icon';
import { AppIconEnum } from '../../icon/viewmodel';

const MobileNavbar = () => {
    return (
        <nav className="fixed top-0 left-0 bg-snow w-full flex gap-x-2 px-[18px] py-4 justify-between items-center">
            <Signature />
            <Icon icon={AppIconEnum.HAMBURGER} iconSize={24} />
        </nav>
    );
};

export default MobileNavbar;
