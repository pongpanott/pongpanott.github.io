import TimelineIndicator from './timeline-indicator';
import { meStaticText } from 'common/constants/static-text/me';
import YearIndicator from './year-indicator';
import { useViewModel } from './viewmodel';
import { getCurrentDateForJourney, workMonthCalculate } from 'common/utils/date-calculator';
import TimelineTail from './timeline-indicator/timeline-tail';

type TimelineProps = {
    activeJourney: number;
    setActiveJourney: (value: number) => void;
};

const Timeline = ({ activeJourney, setActiveJourney }: TimelineProps) => {
    const { timelineRef, selectActiveJourney } = useViewModel({ setActiveJourney });

    const thisYear = new Date().getFullYear();
    const thisMonth = new Date().getMonth() + 1;
    const lastDayOfThisYear = `${thisYear}/12/31`;

    const thisYearMonthLeft =
        workMonthCalculate(getCurrentDateForJourney(), lastDayOfThisYear) - thisMonth;
    return (
        <div className="py-4">
            <div
                ref={timelineRef}
                className="h-[288px] w-[120px] overflow-y-auto relative timeline-element flex flex-col"
            >
                <YearIndicator />

                <div className="z-30 relative">
                    <TimelineTail className="bg-black/10" height={thisYearMonthLeft * 12} />
                </div>

                {meStaticText.journey.map((item, index) => (
                    <>
                        <TimelineIndicator
                            key={item.where}
                            id={`timeline-node-${index}`}
                            startDate={item.startDate}
                            endDate={item.endDate || getCurrentDateForJourney()}
                            isPresent={index === 0}
                            isActive={index === activeJourney}
                            onClick={() => selectActiveJourney(index)}
                            usePlacholder={meStaticText.journey.length - 1 === index}
                        />
                    </>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
