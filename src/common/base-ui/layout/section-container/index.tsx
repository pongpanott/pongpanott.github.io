import { BaseComponentProps } from 'common/types/base-component';
import React, { PropsWithChildren, forwardRef } from 'react';

type SectionContainerProps = BaseComponentProps & {
    children: React.ReactNode;
};

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
    ({ className, children }, ref) => {
        return (
            <section
                ref={ref}
                className={`${className} px-[18px] md:px-8 flex py-[60px] md:py-[75px] flex-col w-full justify-center lg:max-w-[1280px] lg:px-[170px] mx-auto`}
            >
                {children}
            </section>
        );
    }
);

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer;
