import { cx, css } from '@emotion/css';
import BaseWorkCard, { BaseWorkCardProps } from '..';
import { useMediaSize } from 'common/hooks/media-size';
import Link from 'next/link';

const TabletWorkCard = ({
    title,
    description,
    themeColor,
    icon,
    appImage,
    tabletBackground,
    siteUrl,
}: BaseWorkCardProps) => {
    const { isTablet } = useMediaSize();

    return isTablet ? (
        <>
            {siteUrl ? (
                <Link
                    href={siteUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={cx(
                        'pt-8 px-8',
                        css`
                            background: ${tabletBackground};
                        `
                    )}
                >
                    <div className="flex gap-x-8 w-[576px] h-[270px] mx-auto">
                        <BaseWorkCard.Body className="w-[292px]">
                            <BaseWorkCard.AppLogo
                                icon={icon}
                                className={cx(
                                    'mb-[18px]',
                                    css`
                                        svg {
                                            width: auto;
                                            height: 36px;
                                        }
                                    `
                                )}
                            />
                            <BaseWorkCard.Title
                                title={title}
                                themeColor={themeColor}
                                className=""
                            />
                            <BaseWorkCard.Description
                                description={description}
                                className="text-xs"
                            />
                        </BaseWorkCard.Body>

                        {appImage}
                    </div>
                </Link>
            ) : (
                <div>
                    <div className="flex gap-x-8 w-[576px] h-[270px] mx-auto">
                        <BaseWorkCard.Body className="w-[292px]">
                            <BaseWorkCard.AppLogo
                                icon={icon}
                                className={cx(
                                    'mb-[18px]',
                                    css`
                                        svg {
                                            width: auto;
                                            height: 36px;
                                        }
                                    `
                                )}
                            />
                            <BaseWorkCard.Title
                                title={title}
                                themeColor={themeColor}
                                className=""
                            />
                            <BaseWorkCard.Description
                                description={description}
                                className="text-xs"
                            />
                        </BaseWorkCard.Body>

                        {appImage}
                    </div>
                </div>
            )}
        </>
    ) : null;
};

export default TabletWorkCard;
