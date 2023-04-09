import React from 'react';
import Signature from './signature';
import { navbarItems } from '@/common/constants/navbar-items';

const TabletNavbar = () => {
    return (
        <nav className="fixed w-full top-0 left-0 px-8 py-4">
            <div className="w-full max-w-[940px] mx-auto flex justify-between items-center">
                <Signature />

                <div className="flex items-center gap-x-8">
                    {navbarItems.map((item) => (
                        <button key={item.label} className="text-lg spacing-minus-two-perc">
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default TabletNavbar;
