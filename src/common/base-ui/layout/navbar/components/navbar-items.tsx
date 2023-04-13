import { defaultValue } from 'common/constants/default';
import Link from 'next/link';
import React from 'react';

const NavbarItem = ({
    label,
    onClick,
    href,
}: {
    label: string;
    onClick: () => void;
    href: string;
}) => (
    <Link href={href} onClick={onClick} className="text-lg spacing-minus-two-perc">
        {label}
    </Link>
);

const NevbarItems = ({ setIsOpen }: { setIsOpen: (value: boolean) => void }) => {
    return (
        <div className="flex flex-col items-end gap-y-6 md:gap-x-8 md:flex-row">
            <NavbarItem
                label="work."
                onClick={() => {
                    setIsOpen(false);
                }}
                href="#work"
            />
            <NavbarItem
                label="me."
                onClick={() => {
                    setIsOpen(false);
                }}
                href="#me"
            />
            <NavbarItem
                label="get in touch."
                onClick={() => {
                    setIsOpen(false);
                }}
                href={`mailto:${defaultValue.email}`}
            />
        </div>
    );
};

export default NevbarItems;
