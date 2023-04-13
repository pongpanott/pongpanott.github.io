import { css, cx } from '@emotion/css';
import { AppIconEnum, appIconMapping } from './viewmodel';
import { BaseComponentProps } from '../../types/base-component';
import { useMediaSize } from 'common/hooks/media-size';

type IconProps = BaseComponentProps & {
    icon: AppIconEnum;
    iconSize?: number;
};

const Icon = ({ className, icon, iconSize }: IconProps) => {
    const { isMobile } = useMediaSize();

    const defaultIconSize = isMobile ? 20 : 24;

    return (
        <i
            className={cx(
                className,
                css`
                    svg {
                        width: ${iconSize || defaultIconSize}px;
                        height: auto;
                    }
                `
            )}
        >
            {appIconMapping[icon]}
        </i>
    );
};

export default Icon;
