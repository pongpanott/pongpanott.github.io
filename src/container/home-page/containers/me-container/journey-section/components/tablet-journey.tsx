import { meStaticText } from 'common/constants/static-text/me';
import React, { useState } from 'react';
import Journey from './journey';
import Timeline from 'common/base-ui/timeline';
import { useMediaSize } from 'common/hooks/media-size';

const TabletJourney = () => {
    const [activeJourney, setActiveJourney] = useState(0);

    const { isMobile } = useMediaSize();

    return !isMobile ? (
        <div className="h-[320px] md:justify-center mx-auto md:flex gap-x-8">
            <Timeline activeJourney={activeJourney} setActiveJourney={setActiveJourney} />
            <Journey journey={meStaticText.journey[activeJourney]} className="w-[475px]" />
        </div>
    ) : null;
};

export default TabletJourney;
