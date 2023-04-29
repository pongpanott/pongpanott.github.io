import TimelineIndicator from './timeline-indicator';
import { meStaticText } from 'common/constants/static-text/me';
import { useRef } from 'react';
import YearIndicator from './year-indicator';
import { useViewModel } from './viewmodel';

type TimelineProps = {
    activeJourney: number;
    setActiveJourney: (value: number) => void;
};

const Timeline = ({ activeJourney, setActiveJourney }: TimelineProps) => {
    const { timelineRef, selectActiveJourney } = useViewModel({ setActiveJourney });

    return (
        <div className="py-4">
            <div
                ref={timelineRef}
                className="h-[288px] w-[120px] overflow-y-auto relative timeline-element flex flex-col"
            >
                <YearIndicator />

                {meStaticText.journey.map((item, index) => (
                    <>
                        <TimelineIndicator
                            key={item.where}
                            id={`timeline-node-${index}`}
                            startDate={item.startDate}
                            endDate={item.endDate}
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