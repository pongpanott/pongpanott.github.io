import { defaultValue } from '@/common/constants/default';
import React from 'react';

const NavbarItem = ({ label, onClick }: { label: string; onClick: () => void }) => (
    <button className="text-lg spacing-minus-two-perc" onClick={onClick}>
        {label}
    </button>
);

const NevbarItems = ({ setIsOpen }: { setIsOpen: (value: boolean) => void }) => {
    return (
        <div className="flex flex-col items-end gap-y-6 sm:gap-x-8 sm:flex-row">
            <NavbarItem
                label="work."
                onClick={() => {
                    setIsOpen(false);
                }}
            />
            <NavbarItem
                label="me."
                onClick={() => {
                    setIsOpen(false);
                }}
            />
            <NavbarItem
                label="get in touch."
                onClick={() => {
                    location.href = `mailto:${defaultValue.email}`;
                    setIsOpen(false);
                }}
            />
        </div>
    );
};

export default NevbarItems;
