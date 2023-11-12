import { css, cx } from '@emotion/css';
import { getCurrentYear } from 'common/utils/date-calculator';

const YearCell = ({ year }: { year: number }) => {
    const cellHeight = year === getCurrentYear() ? 132 : 144;

    return (
        <div
            className={cx(
                'w-full flex flex-col',
                css`
                    height: ${cellHeight}px;
                `
            )}
        >
            <span className="text-2xs leading-3 mt-auto text-timeline-year">{year}</span>
        </div>
    );
};

export default YearCell;
