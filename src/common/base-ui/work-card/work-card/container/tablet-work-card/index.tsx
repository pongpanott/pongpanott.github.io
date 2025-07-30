import { cx, css } from '@emotion/css';
import { WorkCardProps } from '../..';
import { useMediaSize } from 'common/hooks/media-size';
import Link from 'next/link';
import TabletWorkCardContent from './tablet-work-card-content';

const TabletWorkCard = (props: WorkCardProps) => {
    const { isTablet } = useMediaSize();
    const backgroundStyles = cx(
        'pt-8 px-8',
        css`
            background: linear-gradient(
                90deg,
                ${props.gradientColors[0]} 48%,
                ${props.gradientColors[1]} 96%
            );
        `
    );

    return isTablet ? (
        <>
            {props.siteUrl ? (
                <Link
                    href={props.siteUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={backgroundStyles}
                >
                    <TabletWorkCardContent {...props} />
                </Link>
            ) : (
                <div className={backgroundStyles}>
                    <TabletWorkCardContent {...props} />
                </div>
            )}
        </>
    ) : null;
};

export default TabletWorkCard;
