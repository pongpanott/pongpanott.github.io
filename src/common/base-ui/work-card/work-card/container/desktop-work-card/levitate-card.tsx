import { css, cx } from '@emotion/css';
import WorkCard, { WorkCardProps } from '../..';
import Link from 'next/link';
import { useMediaSize } from 'common/hooks/media-size';
import UnoptimizedImage from 'common/base-ui/unoptimized-image';
import Icon from 'common/base-ui/icon';
import { AppIconEnum } from 'common/base-ui/icon/viewmodel';

type LeviatetWorkCardProps = WorkCardProps & {
    onMouseLeave: () => void;
    siteUrl: string | null;
};

const LevitateWorkCard = ({
    id,
    title,
    themeColor,
    gradientColors,
    description,
    appLogo,
    appImage,
    siteUrl,
    onMouseLeave,
}: LeviatetWorkCardProps) => {
    const { isDesktop } = useMediaSize();

    return isDesktop ? (
        <div
            onMouseLeave={onMouseLeave}
            className={cx(
                'absolute top-0 z-[10] left-0 w-screen h-[361px]',
                css`
                    background: linear-gradient(
                        90deg,
                        ${gradientColors[0]} 48%,
                        ${gradientColors[1]} 96%
                    );
                `
            )}
        >
            <WorkCard.Body className="flex mx-auto pt-8 h-full gap-x-[48px] w-[761px]">
                <div className="w-[398px] flex flex-col">
                    <WorkCard.AppLogo
                        src={appLogo.src}
                        alt={id}
                        {...appLogo.size.l}
                        className="mb-6"
                    />
                    <WorkCard.Title
                        title={title}
                        themeColor={themeColor}
                        className="text-[22px] leading-[33px] mb-4"
                    />
                    <WorkCard.Description description={description} className="text-sm" />

                    {siteUrl ? (
                        <Link href={siteUrl} passHref legacyBehavior>
                            <a
                                target="_blank"
                                rel="noopener"
                                className="text-xs mx-auto mt-auto mb-6 flex gap-x-1 items-center"
                            >
                                Visit site
                                <Icon icon={AppIconEnum.ARROW_SINGLE_RIGHT} iconSize={5} />
                            </a>
                        </Link>
                    ) : null}
                </div>

                <div className="flex flex-col justify-end">
                    <UnoptimizedImage src={appImage} alt={id} width={315} height={328} />
                </div>
            </WorkCard.Body>
        </div>
    ) : null;
};

export default LevitateWorkCard;
