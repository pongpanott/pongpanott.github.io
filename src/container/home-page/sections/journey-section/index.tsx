import { meStaticText } from 'common/constants/static-text/me';
import HeaderText from 'common/base-ui/text/header-text';
import { useMediaSize } from 'common/hooks/media-size';
import MobileJourney from './components/mobile-journey';
import TabletJourney from './components/tablet-journey';
import SectionContainer from 'common/base-ui/layout/section-container';

const JourneySection = () => {
    const { isMobile } = useMediaSize();

    return (
        <SectionContainer>
            <HeaderText
                message={meStaticText.journeyTitle}
                fontSize={isMobile ? 30 : 36}
                className="mb-6 md:text-center md:mb-12"
            />
            <MobileJourney />
            <TabletJourney />
        </SectionContainer>
    );
};

export default JourneySection;
