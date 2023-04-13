import React from 'react';
import Signature from './components/signature';
import NavbarItems from './components/navbar-items';

const TabletNavbar = () => {
    return (
        <nav className="fixed bg-snow w-full top-0 left-0 px-8 py-4">
            <div className="w-full max-w-[940px] mx-auto flex justify-between items-center">
                <Signature />

                <NavbarItems setIsOpen={() => false} />
            </div>
        </nav>
    );
};

export default TabletNavbar;
