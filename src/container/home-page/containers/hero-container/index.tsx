import CircleButton from 'common/base-ui/buttons/circle-button';
import Icon from 'common/base-ui/icon';
import HeaderText from 'common/base-ui/text/header-text';
import { useMediaSize } from 'common/hooks/media-size';
import { AppIconEnum } from 'common/base-ui/icon/viewmodel';
import { HomePageStaticText } from 'common/constants/static-text/home';
import HeroSectionFooter from './hero-section-footer';
import { MutableRefObject } from 'react';
import { useWebScroller } from '../../../../common/hooks/web-scroller';

type HeroContainerProps = {
    heroRef: MutableRefObject<HTMLDivElement | null>;
    meRef: MutableRefObject<HTMLDivElement | null>;
};

const HeroContainer = ({ heroRef, meRef }: HeroContainerProps) => {
    const { isMobile } = useMediaSize();

    const { handleWebScroll } = useWebScroller();

    return (
        <div
            ref={heroRef}
            className="flex flex-col xl:px-0 w-full max-w-[940px] mx-auto px-[18px] pb-6 md:p-8 md:pt-0 h-screen mt-[58px] text-center items-center justify-center"
        >
            <div className="my-auto">
                <HeaderText
                    message={HomePageStaticText.heroTitle}
                    fontSize={isMobile ? 48 : 66}
                    className="mb-[18px] md:mb-6"
                />

                <p className="text-sm md:text-base max-w-[463px] w-full mx-auto">
                    {HomePageStaticText.heroMessage}
                </p>

                <CircleButton
                    onClick={() => handleWebScroll(meRef)}
                    className="mt-8 md:mt-16 mx-auto"
                >
                    <Icon icon={AppIconEnum.ARROW_DOWN} iconSize={isMobile ? 16 : 24} />
                </CircleButton>
            </div>

            <HeroSectionFooter />
        </div>
    );
};

export default HeroContainer;
