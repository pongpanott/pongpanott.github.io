import CircleButton from 'common/base-ui/buttons/circle-button';
import Icon from 'common/base-ui/icon';
import HeaderText from 'common/base-ui/text/header-text';
import { useMediaSize } from 'common/hooks/media-size';
import { AppIconEnum } from 'common/base-ui/icon/viewmodel';
import { HomePageStaticText } from 'common/constants/static-text/home';
import HeroSectionFooter from './hero-section-footer';
import { MutableRefObject } from 'react';
import { useWebScroller } from 'common/hooks/web-scroller';
import ContainerWrapper from 'common/layout/container-wrapper';

type HeroContainerProps = {
    meRef: MutableRefObject<HTMLDivElement | null>;
};

const HeroContainer = ({ meRef }: HeroContainerProps) => {
    const { isMobile } = useMediaSize();
    const { handleWebScroll } = useWebScroller();

    return (
        <ContainerWrapper useMaxWidth fixedHeightScreen className="translate-y-[-62px] relative">
            <div className="my-auto text-center">
                <HeaderText
                    message={HomePageStaticText.heroTitle}
                    fontSize={isMobile ? 48 : 66}
                    className="mb-[18px] md:mb-6"
                />

                <p className="text-sm md:text-base max-w-[463px] lg:text-lg w-full mx-auto whitespace-pre-line">
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
        </ContainerWrapper>
    );
};

export default HeroContainer;
