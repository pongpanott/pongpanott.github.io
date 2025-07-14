import PersonalSection from './personal-section';
import JourneySection from './journey-section';
import { MutableRefObject } from 'react';
import ContainerWrapper from 'common/layout/container-wrapper';
import FullScreenSectionContainer from 'common/base-ui/layout/full-screen-section-container';

const MeContainer = ({ meRef }: { meRef: MutableRefObject<HTMLDivElement | null> }) => {
    return (
        // <ContainerWrapper
        //     containerRef={meRef}
        //     className="pt-[120px]! md:pt-[150px]! pb-0! xl:pt-[200px]! md:gap-y-[150px] gap-y-[120px] xl:gap-y-[200px]"
        //     useMaxWidth
        // >
        <>
            <FullScreenSectionContainer>
                <JourneySection />
            </FullScreenSectionContainer>
            <FullScreenSectionContainer>
                <PersonalSection />
            </FullScreenSectionContainer>
        </>
        // </ContainerWrapper>
    );
};

export default MeContainer;
