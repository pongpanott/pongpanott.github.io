import React from 'react';
import PersonalContent from './personal-content';
import { meStaticText } from 'common/constants/static-text/me';
import HeaderText from 'common/base-ui/text/header-text';
import { useMediaSize } from 'common/hooks/media-size';
import SectionContainer from 'common/base-ui/layout/section-container';

const PersonalSection = () => {
    const { isMobile } = useMediaSize();

    return (
        <SectionContainer>
            <div className="md:flex w-full md:gap-x-8 md:justify-center xl:block">
                <div className="mb-6 md:text-left xl:mb-12 xl:text-left md:mb-0 md:w-[350px] md:h-[415px] md:grid md:place-items-center xl:w-fit xl:h-auto">
                    <HeaderText
                        message={meStaticText.personalTitle}
                        fontSize={isMobile ? 30 : 36}
                    />
                </div>
                <div className="flex flex-col gap-y-6 md:gap-y-8 xl:flex-row xl:justify-between">
                    {meStaticText.personal.map((item) => (
                        <PersonalContent
                            key={item.title}
                            title={item.title}
                            dataList={item.dataList}
                        />
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default PersonalSection;
