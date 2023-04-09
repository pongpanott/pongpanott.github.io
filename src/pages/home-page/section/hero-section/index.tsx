import CircleButton from 'common/base-ui/buttons/circle-button';
import Icon from 'common/base-ui/icon';
import HeaderText from 'common/base-ui/text/header-text';
import { useMediaSize } from 'common/hooks/media-size';
import { AppIconEnum } from 'common/base-ui/icon/viewmodel';
import { HomePageStaticText } from 'common/constants/static-text/home';
import HeroSectionFooter from './hero-section-footer';
import { css, cx } from '@emotion/css';

const HeroSection = () => {
    const { isMobile } = useMediaSize();

    return (
        <div className="flex flex-col flex-1 mt-[58px] text-center items-center justify-center">
            <div className="my-auto">
                <HeaderText
                    message={HomePageStaticText.heroTitle}
                    fontSize={isMobile ? 'base' : 'lg'}
                    className="mb-[18px] sm:mb-6"
                />

                <p className="text-sm sm:text-base max-w-[463px] w-full mx-auto">
                    {HomePageStaticText.heroMessage}
                </p>

                <CircleButton className="mt-8 sm:mt-16 mx-auto">
                    <Icon icon={AppIconEnum.ARROW_DOWN} scale={isMobile ? '1' : '1.5'} />
                </CircleButton>
            </div>

            <HeroSectionFooter />
        </div>
    );
};

export default HeroSection;
