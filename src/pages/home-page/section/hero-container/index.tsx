import CircleButton from 'common/base-ui/buttons/circle-button';
import Icon from 'common/base-ui/icon';
import HeaderText from 'common/base-ui/text/header-text';
import { useMediaSize } from 'common/hooks/media-size';
import { AppIconEnum } from 'common/base-ui/icon/viewmodel';
import { HomePageStaticText } from 'common/constants/static-text/home';
import HeroSectionFooter from './hero-section-footer';

const HeroContainer = () => {
    const { isMobile } = useMediaSize();

    return (
        <div className="flex flex-col px-[18px] pb-6 md:p-8 md:pt-0 h-screen mt-[58px] text-center items-center justify-center">
            <div className="my-auto">
                <HeaderText
                    message={HomePageStaticText.heroTitle}
                    fontSize={isMobile ? 'base' : 'lg'}
                    className="mb-[18px] md:mb-6"
                />

                <p className="text-sm md:text-base max-w-[463px] w-full mx-auto">
                    {HomePageStaticText.heroMessage}
                </p>

                <CircleButton className="mt-8 md:mt-16 mx-auto">
                    <Icon icon={AppIconEnum.ARROW_DOWN} iconSize={isMobile ? 16 : 24} />
                </CircleButton>
            </div>

            <HeroSectionFooter />
        </div>
    );
};

export default HeroContainer;
