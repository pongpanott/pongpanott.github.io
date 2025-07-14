import { cx } from '@emotion/css';
import { BaseComponentProps } from 'common/types/base-component';
import React, { PropsWithChildren } from 'react';
import SectionContainer from '../section-container';

type FullScreenSectionContainerProps = BaseComponentProps & {
    children: React.ReactNode;
};

const FullScreenSectionContainer = ({ className, children }: FullScreenSectionContainerProps) => {
    return (
        <SectionContainer className={cx(className, 'min-h-screen')}>{children}</SectionContainer>
    );
};

export default FullScreenSectionContainer;
