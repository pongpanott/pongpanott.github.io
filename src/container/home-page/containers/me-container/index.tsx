import MeSection from './me-section';
import PersonalSection from './personal-section';
import JourneySection from './journey-section';
import { MutableRefObject } from 'react';

const MeContainer = ({ meRef }: { meRef: MutableRefObject<HTMLDivElement | null> }) => {
    return (
        <div
            ref={meRef}
            className="py-[80px] xl:px-0 md:px-8 md:py-[120px] xl:py-[150px] px-[18px] flex flex-col w-full md:gap-y-[150px] gap-y-[120px]"
        >
            <MeSection />
            <JourneySection />
            <PersonalSection />
        </div>
    );
};

export default MeContainer;
