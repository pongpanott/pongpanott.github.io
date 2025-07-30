import React from 'react';
import WorkCard, { WorkCardProps } from '../..';
import UnoptimizedImage from 'common/base-ui/unoptimized-image';

type TabletWorkCardContentProps = WorkCardProps;

const TabletWorkCardContent = ({
    id,
    title,
    description,
    themeColor,
    appLogo,
    appImage,
}: TabletWorkCardContentProps) => {
    return (
        <div className="flex gap-x-8 w-[576px] h-[270px] mx-auto">
            <WorkCard.Body className="w-[292px]">
                <WorkCard.AppLogo
                    src={appLogo.src}
                    alt={id}
                    {...appLogo.size.m}
                    className="mb-[18px]"
                />
                <WorkCard.Title title={title} themeColor={themeColor} className="" />
                <WorkCard.Description description={description} className="text-xs" />
            </WorkCard.Body>
            <UnoptimizedImage src={appImage} alt={id} width={252} height={262} />
        </div>
    );
};

export default TabletWorkCardContent;
