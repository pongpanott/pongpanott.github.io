import { meStaticText } from 'common/constants/static-text/me';
import HeaderText from 'common/base-ui/text/header-text';
import { useMediaSize } from 'common/hooks/media-size';
import MobileJourney from './components/mobile-journey';
import TabletJourney from './components/tablet-journey';

const JourneySection = () => {
    const { isMobile } = useMediaSize();

    return (
        <div>
            <HeaderText
                message={meStaticText.journeyTitle}
                fontSize={isMobile ? 30 : 36}
                className="mb-6 md:text-center md:mb-12"
            />

            <MobileJourney />
            <TabletJourney />
        </div>
    );
};

export default JourneySection;
