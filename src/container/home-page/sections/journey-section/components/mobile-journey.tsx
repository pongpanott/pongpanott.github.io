import Journey from './journey';
import { useMediaSize } from 'common/hooks/media-size';
import { SITE_CONTENT } from 'common/constants';

const MobileJourney = () => {
    const { isMobile } = useMediaSize();

    return isMobile ? (
        <div className="flex flex-col gap-y-6">
            {SITE_CONTENT.journey.journey.map((item, index) =>
                SITE_CONTENT.journey.journey.length - 1 !== index ? (
                    <Journey key={item.where} journey={item} />
                ) : null
            )}
        </div>
    ) : null;
};

export default MobileJourney;
