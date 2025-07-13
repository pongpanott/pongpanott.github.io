import React from 'react';
import BaseWorkCard from '../base-work-card';
import { workStaticText } from 'common/constants/static-text/work';
import CmuSubLogo from 'assets/icons/work/cmu-sub-logo.svg';
import Image from 'next/image';
import cmuInsightImg from 'assets/images/work/cmu-insight.png';

const CmuInsightCard = () => {
    return (
        <BaseWorkCard
            themeColor={workStaticText.workCard.cmuInsight.themeColor}
            title={workStaticText.workCard.cmuInsight.title}
            description={workStaticText.workCard.cmuInsight.description}
            icon={<CmuSubLogo />}
            appImage={
                <div className="mx-auto mb-8 w-[262px] h-[175px] shrink-0 md:h-full md:mb-0 md:flex">
                    <Image
                        src={cmuInsightImg}
                        alt="cmu-insight-app"
                        quality={100}
                        unoptimized
                        className="w-[262px] h-[175px] md:mt-auto md:mb-8 lg:mt-7 lg:mb-12"
                    />
                </div>
            }
            mobileBackground="linear-gradient(180deg, #F8F2FC 44%, #9D7CBC 88%)"
            tabletBackground="linear-gradient(90deg, #F8F2FC 48%, #9D7CBC 96%)"
            desktopBackground="linear-gradient(180deg, #F8F2FC 44%, #9D7CBC 88%)"
            levitateAppImage={
                <div className="w-[315px] h-[210px] mx-auto relative shrink-0">
                    <Image
                        src={cmuInsightImg}
                        alt="cmu-insight-app"
                        quality={100}
                        unoptimized
                        className="absolute bottom-[-3px] w-[315px] h-[210px]"
                    />
                </div>
            }
            levitateImageClassName="justify-center"
            siteUrl={workStaticText.workCard.cmuInsight.siteUrl}
        />
    );
};

export default CmuInsightCard;
