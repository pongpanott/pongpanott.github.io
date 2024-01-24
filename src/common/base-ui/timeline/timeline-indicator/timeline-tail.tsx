import { css, cx } from '@emotion/css';
import { BaseComponentProps } from 'common/types/base-component';
import React from 'react';

type TimelineTailProps = BaseComponentProps & {
    height: number;
};

const TimelineTail = ({ className, height }: TimelineTailProps) => {
    return (
        <div
            className={cx(
                className,
                'w-[2px] mx-auto',
                css`
                    height: ${height}px;
                `
            )}
        />
    );
};

export default TimelineTail;
