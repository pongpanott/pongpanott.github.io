import Icon from 'common/base-ui/icon';
import { useMediaSize } from 'common/hooks/media-size';
import { css, cx } from '@emotion/css';
import { AppIconEnum } from 'common/base-ui/icon/viewmodel';
import HeaderText from 'common/base-ui/text/header-text';
import { meStaticText } from 'common/constants/static-text/me';

const MeSection = () => {
    const { isMobile, isTablet, isDesktop } = useMediaSize();

    return (
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
                <HeaderText
                    message={meStaticText.meTitle}
                    fontSize={isMobile ? 40 : isTablet ? 48 : 52}
                    className="mb-[18px] md:mb-5 xl:mb-6"
                />
                <p className="text-sm md:text-base">{meStaticText.meMessage}</p>
            </div>
        </div>
    );
};

export default MeSection;
