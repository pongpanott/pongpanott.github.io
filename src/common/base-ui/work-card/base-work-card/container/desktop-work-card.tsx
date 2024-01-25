import { css, cx } from '@emotion/css';
import BaseWorkCard, { BaseWorkCardProps } from '..';
import { useState } from 'react';
import LevitateWorkCard from './levitate-card';
import { useMediaSize } from 'common/hooks/media-size';

const DesktopWorkCard = (props: BaseWorkCardProps) => {
    const [isHover, setIsHover] = useState(false);

    const { isDesktop } = useMediaSize();

    return isDesktop ? (
        <>
            <div
                onMouseEnter={() => setIsHover(true)}
                className={cx(
                    'px-8 pt-8 relative',
                    css`
                        background: ${props.desktopBackground};
                    `
                )}
            >
                <BaseWorkCard.AppLogo
                    icon={props.icon}
                    className={cx(
                        'mb-6 w-fit mx-auto',
                        css`
                            svg {
                                width: auto;
                                height: 43px;
                            }
                        `
                    )}
                />

                {props.appImage}
            </div>
            {isHover && <LevitateWorkCard onMouseLeave={() => setIsHover(false)} {...props} />}
        </>
    ) : null;
};

export default DesktopWorkCard;
