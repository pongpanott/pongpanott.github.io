import React from 'react';
import PersonalContent from './personal-content';
import { meStaticText } from 'common/constants/static-text/me';

const PersonalSection = () => {
    return (
        <div className="flex flex-col gap-y-6 md:gap-y-8 xl:flex-row xl:justify-between">
            {meStaticText.personal.map((item) => (
                <PersonalContent key={item.title} title={item.title} dataList={item.dataList} />
            ))}
        </div>
    );
};

export default PersonalSection;
