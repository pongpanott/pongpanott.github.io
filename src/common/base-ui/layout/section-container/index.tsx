import { BaseComponentProps } from 'common/types/base-component';
import React, { PropsWithChildren } from 'react';

type SectionContainerProps = BaseComponentProps & {
    children: React.ReactNode;
};

const SectionContainer = ({ className, children }: SectionContainerProps) => {
    return (
        <section
            className={`${className} px-[18px] md:px-8 flex py-[60px] md:py-[75px] flex-col w-full justify-center lg:max-w-[1280px] lg:px-[170px] mx-auto`}
        >
            {children}
        </section>
    );
};

export default SectionContainer;
