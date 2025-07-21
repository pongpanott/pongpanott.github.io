import { css, cx } from '@emotion/css';
import { BaseComponentProps } from 'common/types/base-component';
import React from 'react';

type TimelineTailProps = BaseComponentProps & {
    height: number;
    onClick?: () => void;
};

const TimelineTail = ({ className, height, onClick }: TimelineTailProps) => {
    return (
        <div
            onClick={onClick}
            className={cx(
                className,
                onClick && 'cursor-pointer',
                'w-[2px] mx-auto',
                css`
                    height: ${height}px;
                `
            )}
        />
    );
};

export default TimelineTail;
