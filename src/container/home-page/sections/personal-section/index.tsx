import React from 'react';
import PersonalContent from './personal-content';
import SectionContainer from 'common/base-ui/layout/section-container';
import { SITE_CONTENT } from 'common/constants';

const PersonalSection = () => {
    return (
        <SectionContainer>
            <div className="md:flex w-full md:gap-x-8 md:justify-center xl:block">
                <div className="mb-6 md:text-left xl:mb-12 xl:text-left md:mb-0 md:w-[350px] md:h-[415px] md:grid md:place-items-center xl:w-fit xl:h-auto">
                    <h3>{SITE_CONTENT.personal.title}</h3>
                </div>
                <div className="flex flex-col gap-y-6 md:gap-y-8 xl:flex-row xl:justify-between">
                    {SITE_CONTENT.personal.personal.map((personalData) => (
                        <PersonalContent
                            key={personalData.title}
                            title={personalData.title}
                            dataList={personalData.dataList}
                        />
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default PersonalSection;
