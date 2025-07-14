import { meStaticText } from 'common/constants/static-text/me';
import Journey from './journey';
import { useMediaSize } from 'common/hooks/media-size';

const MobileJourney = () => {
    const { isMobile } = useMediaSize();

    return isMobile ? (
        <div className="flex flex-col gap-y-6">
            {meStaticText.journey?.map((item, index) =>
                meStaticText.journey.length - 1 !== index ? (
                    <Journey key={item.where} journey={item} />
                ) : null
            )}
        </div>
    ) : null;
};

export default MobileJourney;
