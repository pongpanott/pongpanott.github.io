import { css, cx } from '@emotion/css';
import BaseWorkCard, { BaseWorkCardProps } from '..';

const MobileWorkCard = ({
    title,
    description,
    themeColor,
    icon,
    appImage,
    mobileBackground,
}: BaseWorkCardProps) => {
    return (
        <div
            className={cx(
                'px-8 pt-4 hide-tablet hide-desktop',
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
                                width: 103px;
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
        </div>
    );
};

export default MobileWorkCard;
