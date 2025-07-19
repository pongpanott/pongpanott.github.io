import { meStaticText } from 'common/constants/static-text/me';
import HeaderText from 'common/base-ui/text/header-text';
import { useMediaSize } from 'common/hooks/media-size';
import MobileJourney from './components/mobile-journey';
import TabletJourney from './components/tablet-journey';
import SectionContainer from 'common/base-ui/layout/section-container';
import { SITE_CONTENT } from 'common/constants';

const JourneySection = () => {
    const { isMobile } = useMediaSize();

    return (
        <SectionContainer>
            <h3 className="mb-[18px] md:text-center md:mb-12">{SITE_CONTENT.journey.title}</h3>
            <MobileJourney />
            {/* <TabletJourney /> */}
        </SectionContainer>
    );
};

export default JourneySection;
