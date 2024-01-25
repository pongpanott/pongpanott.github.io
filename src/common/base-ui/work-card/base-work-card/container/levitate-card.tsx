import { css, cx } from '@emotion/css';
import BaseWorkCard, { BaseWorkCardProps } from '..';
import Link from 'next/link';
import Icon from '../../../icon';
import { AppIconEnum } from '../../../icon/viewmodel';
import { useMediaSize } from 'common/hooks/media-size';

type LeviatetWorkCardProps = BaseWorkCardProps & {
    onMouseLeave: () => void;
    siteUrl: string;
    levitateImageClassName?: string;
};

const LevitateWorkCard = ({
    title,
    themeColor,
    description,
    icon,
    levitateAppImage,
    tabletBackground,
    onMouseLeave,
    siteUrl,
    levitateImageClassName,
}: LeviatetWorkCardProps) => {
    const { isDesktop } = useMediaSize();

    return isDesktop ? (
        <div
            onMouseLeave={onMouseLeave}
            className={cx(
                'absolute top-0 z-[10] left-0 w-screen h-[361px]',
                css`
                    background: ${tabletBackground};
                `
            )}
        >
            <BaseWorkCard.Body className="flex mx-auto pt-8 h-full gap-x-[48px] w-[761px]">
                <div className="w-[398px] flex flex-col">
                    <BaseWorkCard.AppLogo
                        icon={icon}
                        className={cx(
                            'mb-6',
                            css`
                                svg {
                                    width: auto;
                                    height: 56px;
                                }
                            `
                        )}
                    />
                    <BaseWorkCard.Title
                        title={title}
                        themeColor={themeColor}
                        className="text-[22px] leading-[33px] mb-4"
                    />
                    <BaseWorkCard.Description description={description} className="text-sm" />

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
                </div>

                <div className={cx(levitateImageClassName, 'flex flex-col justify-end')}>
                    {levitateAppImage}
                </div>
            </BaseWorkCard.Body>
        </div>
    ) : null;
};

export default LevitateWorkCard;
