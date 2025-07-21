import TimelineIndicator from './timeline-indicator';
import { meStaticText } from 'common/constants/static-text/me';
import YearIndicator from './year-indicator';
import { useViewModel } from './viewmodel';
import { DateCalculator } from 'common/utils';
import TimelineTail from './timeline-indicator/timeline-tail';

type TimelineProps = {
    activeJourney: number;
    setActiveJourney: (value: number) => void;
};

const Timeline = ({ activeJourney, setActiveJourney }: TimelineProps) => {
    const { timelineRef, selectActiveJourney } = useViewModel({ setActiveJourney });

    return (
        <div className="py-4 overflow-y-scroll timeline-element">
            <div ref={timelineRef} className="w-[120px] relative flex flex-col">
                <YearIndicator />

                <div className="z-30 relative">
                    <TimelineTail
                        className="bg-black/10"
                        height={DateCalculator.getMonthsLeftInYear() * 12}
                    />
                </div>

                {meStaticText.journey.map((item, index) => (
                    <>
                        <TimelineIndicator
                            key={item.where}
                            id={`timeline-node-${index}`}
                            startDate={item.startDate}
                            endDate={item.endDate || DateCalculator.getCurrentDateForJourney()}
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
