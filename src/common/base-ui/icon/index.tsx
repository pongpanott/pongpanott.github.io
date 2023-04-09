import { css, cx } from '@emotion/css';
import { AppIconEnum, appIconMapping } from './viewmodel';
import { BaseComponentProps } from '../../types/base-component';

type IconProps = BaseComponentProps & {
    icon: AppIconEnum;
    iconSize?: number;
    scale?: string;
};

const Icon = ({ className, icon, iconSize, scale }: IconProps) => {
    return (
        <i
            className={cx(
                className,
                css`
                    svg {
                        width: ${iconSize}px;
                        height: auto || ${iconSize}px;
                        scale: ${scale || '1'};
                    }
                `
            )}
        >
            {appIconMapping[icon]}
        </i>
    );
};

export default Icon;
