import React from 'react';
import WorkCard, { WorkCardProps } from '../..';
import UnoptimizedImage from 'common/base-ui/unoptimized-image';

type MobileWorkCardContentProps = WorkCardProps;

const MobileWorkCardContent = ({
    id,
    title,
    description,
    themeColor,
    appLogo,
    appImage,
}: MobileWorkCardContentProps) => {
    return (
        <React.Fragment>
            <WorkCard.Body className="w-[260px] mx-auto mb-6">
                <WorkCard.AppLogo
                    src={appLogo.src}
                    alt={id}
                    {...appLogo.size.s}
                    className="mb-5 mx-auto"
                />
                <WorkCard.Title title={title} themeColor={themeColor} className="text-center" />
                <WorkCard.Description description={description} className="text-xs text-center" />
            </WorkCard.Body>
            <UnoptimizedImage
                src={appImage}
                alt={id}
                width={252}
                height={262}
                className="mx-auto"
            />
        </React.Fragment>
    );
};

export default MobileWorkCardContent;
