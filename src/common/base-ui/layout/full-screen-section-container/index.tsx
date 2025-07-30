import { cx } from '@emotion/css';
import { BaseComponentProps } from 'common/types/base-component';
import React, { forwardRef } from 'react';
import SectionContainer from '../section-container';

type FullScreenSectionContainerProps = BaseComponentProps & {
    children: React.ReactNode;
};

const FullScreenSectionContainer = forwardRef<HTMLElement, FullScreenSectionContainerProps>(
    ({ className, children }, ref) => {
        return (
            <SectionContainer ref={ref} className={cx(className, 'min-h-screen')}>
                {children}
            </SectionContainer>
        );
    }
);

FullScreenSectionContainer.displayName = 'FullScreenSectionContainer';

export default FullScreenSectionContainer;
