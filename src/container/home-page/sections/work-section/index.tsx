import { forwardRef } from 'react';
import { SITE_CONTENT } from 'common/constants';
import SectionContainer from 'common/base-ui/layout/section-container';
import DesktopWorkSection from './desktop-work-section';
import MobileWorkSection from './mobile-work-section';

const WorkSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
    return (
        <SectionContainer ref={ref} className="px-0! max-w-none!">
            <div className="px-[18px] w-full max-w-[537px] md:px-0 mx-auto">
                <h3 className="mb-[18px] md:mb-5 xl:mb-6">{SITE_CONTENT.work.title}</h3>
                <p className="text-sm md:text-right md:text-base mb-[18px] md:mb-12">
                    {SITE_CONTENT.work.subTitle}
                </p>
            </div>
            <MobileWorkSection />
            <DesktopWorkSection />
        </SectionContainer>
    );
});

WorkSection.displayName = 'WorkSection';

export default WorkSection;
