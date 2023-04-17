import BaseWorkCard from '../base-work-card';
import MentalDeeDeeLogo from 'assets/icons/work/logo.svg';
import app from 'assets/images/work/mental-dee-dee/app.png';
import Image from 'next/image';
import { workStaticText } from '../../../constants/static-text/work';

const MentalDeeDeeCard = () => {
    return (
        <BaseWorkCard
            themeColor={workStaticText.workCard.mentalDeeDee.themeColor}
            title={workStaticText.workCard.mentalDeeDee.title}
            description={workStaticText.workCard.mentalDeeDee.description}
            icon={<MentalDeeDeeLogo />}
            appImage={
                <div className="w-[252px] h-[262px] mx-auto relative ">
                    <Image
                        src={app}
                        alt="mentaldeedee-app"
                        quality={100}
                        unoptimized
                        className="absolute bottom-[-3px] w-[252px] h-[262px]"
                    />
                </div>
            }
            mobileBackground="linear-gradient(180deg, #fafaf2 44%, #ffd67d 88%)"
            tabletBackground="linear-gradient(90deg, #FAFAF2 48%, #FFD67D 96%)"
            desktopBackground="linear-gradient(180deg, #fafaf2 44%, #ffd67d 88%)"
            levitateAppImage={
                <div className="w-[315px] h-[328px] mx-auto relative ">
                    <Image
                        src={app}
                        alt="mentaldeedee-app"
                        quality={100}
                        unoptimized
                        className="absolute bottom-[-3px] w-[315px] h-[328px]"
                    />
                </div>
            }
            siteUrl={workStaticText.workCard.mentalDeeDee.siteUrl}
        />
    );
};

export default MentalDeeDeeCard;
