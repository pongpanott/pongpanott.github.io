import { css, cx } from '@emotion/css';
import BaseWorkCard, { BaseWorkCardProps } from '..';
import { useState } from 'react';
import LevitateWorkCard from './levitate-card';

const DesktopWorkCard = (props: BaseWorkCardProps) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <div
                onMouseEnter={() => setIsHover(true)}
                className={cx(
                    'hide-mobile hide-tablet px-8 pt-8 relative',
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
                                width: 140px;
                                height: 43px;
                            }
                        `
                    )}
                />

                {props.appImage}
            </div>
            {isHover && <LevitateWorkCard onMouseLeave={() => setIsHover(false)} {...props} />}
        </>
    );
};

export default DesktopWorkCard;
