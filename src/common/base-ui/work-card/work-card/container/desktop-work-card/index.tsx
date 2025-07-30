import { css, cx } from '@emotion/css';
import WorkCard, { WorkCardProps } from '../..';
import { useMediaSize } from 'common/hooks/media-size';
import LevitateWorkCard from './levitate-card';
import UnoptimizedImage from 'common/base-ui/unoptimized-image';

type DesktopWorkCardProps = WorkCardProps;

const DesktopWorkCard = (props: DesktopWorkCardProps) => {
    const { isDesktop } = useMediaSize();

    return isDesktop ? (
        <>
            <div
                onMouseEnter={() => props.setIsHovering(true)}
                className={cx(
                    props.className,
                    'px-8 pt-8 relative overflow-hidden w-[316px] h-[361px]',
                    css`
                        background: linear-gradient(
                            180deg,
                            ${props.gradientColors[0]} 44%,
                            ${props.gradientColors[1]} 88%
                        );
                    `
                )}
            >
                <WorkCard.AppLogo
                    src={props.appLogo.src}
                    alt={props.id}
                    {...props.appLogo.size.l}
                    className="mx-auto"
                />
                <UnoptimizedImage
                    src={props.appImage}
                    alt={props.id}
                    width={252}
                    height={262}
                    className="absolute bottom-0"
                />
            </div>
            {props.isHovering && (
                <LevitateWorkCard
                    {...props}
                    onMouseLeave={() => props.setIsHovering(false)}
                    siteUrl={props.siteUrl}
                />
            )}
        </>
    ) : null;
};

export default DesktopWorkCard;
