import { forwardRef } from 'react';
import MentalDeeDeeCard from 'common/base-ui/work-card/mental-dee-dee';
import CommissionCard from 'common/base-ui/work-card/commision';
import CmuInsightCard from 'common/base-ui/work-card/cmu-insight';
import { SITE_CONTENT } from 'common/constants';
import SectionContainer from 'common/base-ui/layout/section-container';

const WorkSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
    return (
        <SectionContainer ref={ref} className="px-0! max-w-none!">
            <div className="px-[18px] w-full max-w-[537px] md:px-0 mx-auto">
                <h3 className="mb-[18px] md:mb-5 xl:mb-6">{SITE_CONTENT.work.title}</h3>
                <p className="text-sm md:text-right md:text-base mb-[18px] md:mb-12">
                    {SITE_CONTENT.work.subTitle}
                </p>
            </div>

            <div className="relative xl:grid xl:place-items-center w-full">
                <div className="flex flex-col md:gap-y-6 xl:grid-cols-2 gap-y-4 xl:w-[668px] xl:grid xl:mx-auto xl:gap-8">
                    <MentalDeeDeeCard />
                    <CmuInsightCard />
                    <CommissionCard />
                </div>
            </div>
        </SectionContainer>
    );
});

WorkSection.displayName = 'WorkSection';

export default WorkSection;
