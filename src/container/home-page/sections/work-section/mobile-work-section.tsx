import CommissionCard from 'common/base-ui/work-card/commision';
import WorkCard from 'common/base-ui/work-card/work-card';
import { SITE_CONTENT } from 'common/constants';
import { useMediaSize } from 'common/hooks';
import React from 'react';

const MobileWorkSection = () => {
    const { isDesktop } = useMediaSize();

    if (isDesktop) return null;

    return (
        <div className="flex flex-col gap-y-4 md:gap-y-6">
            {SITE_CONTENT.work.works.map((work) => (
                <WorkCard
                    key={work.id}
                    {...work}
                    isHovering={false}
                    setIsHovering={() => {
                        //
                    }}
                />
            ))}
            <CommissionCard />
        </div>
    );
};

export default MobileWorkSection;
