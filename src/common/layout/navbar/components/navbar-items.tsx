import { EXTERNAL_LINK } from '@constants';
import { HashRouteEnum } from 'common/types/hash-route';
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

const NavbarItems = ({ setIsOpen }: { setIsOpen: (value: boolean) => void }) => {
    return (
        <div className="flex flex-col items-end gap-y-6 md:gap-x-8 md:flex-row">
            <NavbarItem
                label="work."
                onClick={() => {
                    setIsOpen(false);
                }}
                href={HashRouteEnum.WORK}
            />
            <NavbarItem
                label="me."
                onClick={() => {
                    setIsOpen(false);
                }}
                href={HashRouteEnum.ME}
            />
            <NavbarItem
                label="get in touch."
                onClick={() => {
                    setIsOpen(false);
                }}
                href={`mailto:${EXTERNAL_LINK.contact.email}`}
            />
        </div>
    );
};

export default NavbarItems;
