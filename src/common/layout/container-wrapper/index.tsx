import { cx } from '@emotion/css';
import { BaseComponentProps } from 'common/types/base-component';
import { MutableRefObject } from 'react';

type ContainerWrapperProps = BaseComponentProps & {
    containerRef?: MutableRefObject<HTMLDivElement | null>;
    children: React.ReactNode;
    useMaxWidth?: boolean;
    fixedHeightScreen?: boolean;
};

const ContainerWrapper = ({
    className,
    containerRef,
    children,
    useMaxWidth,
    fixedHeightScreen,
}: ContainerWrapperProps) => {
    return (
        <section
            ref={containerRef}
            className={cx(
                className,
                useMaxWidth ? 'max-w-[940px] mx-auto' : 'max-w-none',
                fixedHeightScreen ? 'h-screen' : 'h-auto',
                'flex flex-col xl:px-0 items-center justify-center w-full px-[18px] md:p-8 xl:py-12 pb-6'
            )}
        >
            {children}
        </section>
    );
};

export default ContainerWrapper;
