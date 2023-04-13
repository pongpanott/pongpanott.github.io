import { meStaticText } from '@/common/constants/static-text/me';
import React from 'react';
import Journey from './journey';

const TabletJourney = () => {
    return (
        <div className="w-[648px] mx-auto flex justify-end gap-x-6 xl:gap-x-8">
            <div className="w-[116px] bg-blue-200 flex-shrink-0">timeline here</div>
            <Journey journey={meStaticText.journey[0]} className="w-[435px]" />
        </div>
    );
};

export default TabletJourney;
