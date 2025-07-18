import CircleButton from 'common/base-ui/buttons/circle-button';
import Icon from 'common/base-ui/icon';
import HeaderText from 'common/base-ui/text/header-text';
import { useMediaSize } from 'common/hooks/media-size';
import { AppIconEnum } from 'common/base-ui/icon/viewmodel';
import HeroSectionFooter from './hero-section-footer';
import { forwardRef } from 'react';
import { useWebScroller } from 'common/hooks/web-scroller';
import FullScreenSectionContainer from 'common/base-ui/layout/full-screen-section-container';
import { SITE_CONTENT } from 'common/constants';

const HeroSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
    const { isMobile } = useMediaSize();
    const { handleWebScroll } = useWebScroller();

    return (
        <FullScreenSectionContainer className="relative" ref={ref}>
            <div className="my-auto text-center">
                <HeaderText
                    message={SITE_CONTENT.hero.title}
                    fontSize={isMobile ? 48 : 66}
                    className="mb-[18px] md:mb-6 md:whitespace-pre-line"
                />

                <p className="text-sm md:text-base max-w-[463px] lg:text-lg w-full mx-auto whitespace-pre-line">
                    {SITE_CONTENT.hero.subTitle}
                </p>

                <CircleButton
                    onClick={() => handleWebScroll(ref)}
                    className="mt-8 md:mt-16 mx-auto"
                >
                    <Icon icon={AppIconEnum.ARROW_DOWN} iconSize={isMobile ? 16 : 24} />
                </CircleButton>
            </div>
            <HeroSectionFooter />
        </FullScreenSectionContainer>
    );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
