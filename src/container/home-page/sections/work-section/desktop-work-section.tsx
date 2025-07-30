import CommissionCard from 'common/base-ui/work-card/commision';
import WorkCard from 'common/base-ui/work-card/work-card';
import { SITE_CONTENT } from 'common/constants';
import { useMediaSize } from 'common/hooks';
import React, { useState } from 'react';

const DesktopWorkSection = () => {
    const [hoveringIndex, setHoveringIndex] = useState(-1);

    const { isDesktop } = useMediaSize();

    if (!isDesktop) return null;

    return (
        <div className="flex flex-col place-items-center gap-6">
            {Array.from({ length: Math.ceil(SITE_CONTENT.work.works.length / 2) }).map(
                (_, rowIndex) => (
                    <div key={rowIndex} className="relative grid grid-cols-2 gap-6 w-full">
                        {SITE_CONTENT.work.works
                            .slice(rowIndex * 2, rowIndex * 2 + 2)
                            .map((work, index) => (
                                <WorkCard
                                    key={work.id}
                                    {...work}
                                    isHovering={hoveringIndex === rowIndex * 2 + index}
                                    setIsHovering={() =>
                                        setHoveringIndex((prev) =>
                                            prev === rowIndex * 2 + index && prev > -1
                                                ? -1
                                                : rowIndex * 2 + index
                                        )
                                    }
                                    className={index === 0 ? 'justify-self-end' : ''}
                                />
                            ))}
                        {rowIndex === Math.ceil(SITE_CONTENT.work.works.length / 2) - 1 &&
                        SITE_CONTENT.work.works.length % 2 === 1 ? (
                            <CommissionCard className="w-[316px]" />
                        ) : null}
                    </div>
                )
            )}
        </div>
    );
};

export default DesktopWorkSection;
