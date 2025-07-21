import { meStaticText } from 'common/constants/static-text/me';
import React, { useState } from 'react';
import Journey from './journey';
import Timeline from 'common/base-ui/timeline';
import { useMediaSize } from 'common/hooks/media-size';

const TabletJourney = () => {
    const [activeJourney, setActiveJourney] = useState(0);

    const { isMobile } = useMediaSize();

    return !isMobile ? (
        <div className="h-[440px] md:justify-center mx-auto md:flex w-full gap-x-10 overflow-y-hidden">
            <Timeline activeJourney={activeJourney} setActiveJourney={setActiveJourney} />
            <Journey
                journey={meStaticText.journey[activeJourney]}
                className="flex flex-col w-[475px]"
            />
        </div>
    ) : null;
};

export default TabletJourney;
