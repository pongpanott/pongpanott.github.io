import BaseWorkCard from '../base-work-card';
import MentalDeeDeeLogo from 'assets/icons/work/logo.svg';
import app from 'assets/images/work/mental-dee-dee/app.png';
import Image from 'next/image';

const MentalDeeDeeCard = () => {
    return (
        <BaseWorkCard
            themeColor="#FFB717"
            title={`Psychology Online Class & \n Mental Health Assessment`}
            description="Website shares mental health knowledge with the goal of healing oneself and others. It aims to provide all-around resources and information to improve mental well-being."
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
        />
    );
};

export default MentalDeeDeeCard;
