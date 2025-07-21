import { css, cx } from '@emotion/css';
import { forwardRef } from 'react';
import Icon from 'common/base-ui/icon';
import { AppIconEnum } from 'common/base-ui/icon/viewmodel';
import SectionContainer from 'common/base-ui/layout/section-container';
import HeaderText from 'common/base-ui/text/header-text';
import { useMediaSize } from 'common/hooks/media-size';
import { SITE_CONTENT } from 'common/constants';

const MeSection = forwardRef<HTMLDivElement>((_, ref) => {
    const { isMobile, isTablet, isDesktop } = useMediaSize();

    return (
        <div ref={ref}>
            <SectionContainer className="py-[120px] md:py-[150px]">
                <div className="text-center md:text-left md:flex md:gap-x-6 xl:gap-x-8 md:items-center">
                    <Icon
                        icon={AppIconEnum.PORTRAIT}
                        className={cx(
                            'mx-auto',
                            css`
                                svg {
                                    width: ${isDesktop ? 360 : 284}px !important;
                                }
                            `
                        )}
                    />
                    <div>
                        <h2 className="mb-[18px] md:mb-5 lg:mb-6">{SITE_CONTENT.me.title}</h2>
                        <p className="text-sm md:text-base max-w-[500px] mx-auto md:max-w-none">
                            {SITE_CONTENT.me.description}
                        </p>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
});

MeSection.displayName = 'MeSection';

export default MeSection;
