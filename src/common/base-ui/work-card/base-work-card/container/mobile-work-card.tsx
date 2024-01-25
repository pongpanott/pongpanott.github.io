import { css, cx } from '@emotion/css';
import BaseWorkCard, { BaseWorkCardProps } from '..';
import { useMediaSize } from '../../../../hooks/media-size';
import Link from 'next/link';

const MobileWorkCard = ({
    title,
    description,
    themeColor,
    icon,
    appImage,
    mobileBackground,
    siteUrl,
}: BaseWorkCardProps) => {
    const { isMobile } = useMediaSize();

    return isMobile ? (
        <Link
            href={siteUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={cx(
                'px-8 pt-4',
                css`
                    background: ${mobileBackground};
                `
            )}
        >
            <BaseWorkCard.Body className="w-[260px] mx-auto mb-6">
                <BaseWorkCard.AppLogo
                    icon={icon}
                    className={cx(
                        'mb-5',
                        css`
                            svg {
                                width: auto;
                                height: 36px;
                                margin-left: auto;
                                margin-right: auto;
                            }
                        `
                    )}
                />
                <BaseWorkCard.Title title={title} themeColor={themeColor} className="text-center" />
                <BaseWorkCard.Description
                    description={description}
                    className="text-xs text-center"
                />
            </BaseWorkCard.Body>

            {appImage}
        </Link>
    ) : null;
};

export default MobileWorkCard;
