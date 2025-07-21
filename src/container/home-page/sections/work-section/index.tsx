import { forwardRef } from 'react';
import MentalDeeDeeCard from 'common/base-ui/work-card/mental-dee-dee';
import HeaderText from 'common/base-ui/text/header-text';
import { workStaticText } from 'common/constants/static-text/work';
import { useMediaSize } from 'common/hooks/media-size';
import CommissionCard from 'common/base-ui/work-card/commision';
import CmuInsightCard from 'common/base-ui/work-card/cmu-insight';

const WorkSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
    const { isMobile, isTablet } = useMediaSize();

    return (
        <section ref={ref}>
            <div className="px-[18px] w-full max-w-[537px] md:px-0 mx-auto">
                <HeaderText
                    message={workStaticText.workTitle}
                    fontSize={isMobile ? 40 : isTablet ? 48 : 52}
                    className="mb-[18px] md:mb-5 xl:mb-6"
                />
                <p className="text-sm md:text-right md:text-base">{workStaticText.workMessage}</p>
            </div>

            <div className="relative xl:grid xl:place-items-center w-full">
                <div className="flex flex-col md:gap-y-6 xl:grid-cols-2 gap-y-4 xl:w-[668px] xl:grid xl:mx-auto xl:gap-8">
                    <MentalDeeDeeCard />
                    <CmuInsightCard />
                    <CommissionCard />
                </div>
            </div>
        </section>
    );
});

WorkSection.displayName = 'WorkSection';

export default WorkSection;
