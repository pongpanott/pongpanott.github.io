import BaseWorkCard from '../base-work-card';
import MentalDeeDeeLogo from 'assets/icons/work/mentaldeedee-logo.svg';
import mentalDeeDeeImg from 'assets/images/work/mental-dee-dee.png';
import { SITE_CONTENT } from 'common/constants';
import Image from 'next/image';

const MentalDeeDeeCard = () => {
    return (
        <BaseWorkCard
            themeColor={SITE_CONTENT.work.works.mentalDeeDee.themeColor}
            title={SITE_CONTENT.work.works.mentalDeeDee.title}
            description={SITE_CONTENT.work.works.mentalDeeDee.description}
            icon={<MentalDeeDeeLogo />}
            appImage={
                <div className="w-[252px] h-[262px] mx-auto relative">
                    <Image
                        src={mentalDeeDeeImg}
                        alt="mentaldeedee-app"
                        quality={100}
                        unoptimized
                        className="absolute bottom-[-11px] w-[252px] h-[262px]"
                    />
                </div>
            }
            mobileBackground="linear-gradient(180deg, #fafaf2 44%, #ffd67d 88%)"
            tabletBackground="linear-gradient(90deg, #FAFAF2 48%, #FFD67D 96%)"
            desktopBackground="linear-gradient(180deg, #fafaf2 44%, #ffd67d 88%)"
            levitateAppImage={
                <div className="w-[315px] h-[328px] mx-auto relative ">
                    <Image
                        src={mentalDeeDeeImg}
                        alt="mentaldeedee-app"
                        quality={100}
                        unoptimized
                        className="absolute bottom-[-3px] w-[315px] h-[328px]"
                    />
                </div>
            }
            siteUrl={SITE_CONTENT.work.works.mentalDeeDee.siteUrl}
        />
    );
};

export default MentalDeeDeeCard;
