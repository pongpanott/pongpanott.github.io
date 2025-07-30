import { css, cx } from '@emotion/css';
import { WorkCardProps } from '../..';
import Link from 'next/link';
import MobileWorkCardContent from './mobile-work-card-content';
import { useMediaSize } from 'common/hooks';

const MobileWorkCard = (props: WorkCardProps) => {
    const { isMobile } = useMediaSize();
    const backgroundStyles = cx(
        'px-8 pt-4',
        css`
            background: linear-gradient(
                180deg,
                ${props.gradientColors[0]} 48%,
                ${props.gradientColors[1]} 88%
            );
        `
    );

    return isMobile ? (
        <>
            {props.siteUrl ? (
                <Link
                    href={props.siteUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={backgroundStyles}
                >
                    <MobileWorkCardContent {...props} />
                </Link>
            ) : (
                <div className={backgroundStyles}>
                    <MobileWorkCardContent {...props} />
                </div>
            )}
        </>
    ) : null;
};

export default MobileWorkCard;
