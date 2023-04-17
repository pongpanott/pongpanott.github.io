import { cx, css } from '@emotion/css';
import BaseWorkCard, { BaseWorkCardProps } from '..';

const TabletWorkCard = ({
    title,
    description,
    themeColor,
    icon,
    appImage,
    tabletBackground,
}: BaseWorkCardProps) => (
    <div
        className={cx(
            'pt-8 px-8 hide-mobile hide-desktop',
            css`
                background: ${tabletBackground};
            `
        )}
    >
        <div className="flex gap-x-8 w-[576px] mx-auto">
            <BaseWorkCard.Body className="w-[292px]">
                <BaseWorkCard.AppLogo
                    icon={icon}
                    className={cx(
                        'mb-[18px]',
                        css`
                            svg {
                                width: 103px;
                                height: 36px;
                            }
                        `
                    )}
                />
                <BaseWorkCard.Title title={title} themeColor={themeColor} className="" />
                <BaseWorkCard.Description description={description} className="text-xs" />
            </BaseWorkCard.Body>

            {appImage}
        </div>
    </div>
);

export default TabletWorkCard;
