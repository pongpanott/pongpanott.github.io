import { css, cx } from '@emotion/css';
import { workMonthCalculate } from 'common/utils/date-calculator';
import TimelineNode from './timeline-node';
import { MutableRefObject } from 'react';

type TimelineIndicatorProps = {
    id: string;
    startDate: string;
    endDate: string;
    isPresent: boolean;
    isActive: boolean;
    onClick: () => void;
    usePlacholder?: boolean;
};

const TimelineIndicator = ({
    id,
    startDate,
    endDate,
    isPresent,
    isActive,
    onClick,
    usePlacholder,
}: TimelineIndicatorProps) => {
    const monthOfWork = workMonthCalculate(startDate, endDate);

    const indicatorHeight = isPresent ? 2 : usePlacholder ? 0 : 1;

    console.log('monthOfWork', monthOfWork);

    return (
        <div className="z-30 relative">
            {!usePlacholder && isPresent && (
                <TimelineNode id={id} isActive={isActive} onClick={onClick} />
            )}
            <div
                className={cx(
                    isActive ? 'bg-primary' : 'bg-black/10',
                    'w-[2px] mx-auto',
                    css`
                        height: ${(monthOfWork - indicatorHeight) * 12}px;
                    `
                )}
            />
            {!usePlacholder && <TimelineNode id={id} isActive={isActive} onClick={onClick} />}
        </div>
    );
};

export default TimelineIndicator;
