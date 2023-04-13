import { meStaticText } from 'common/constants/static-text/me';
import Journey from './journey';

const MobileJourney = () => {
    return (
        <div className="flex flex-col gap-y-6 md:hidden">
            {meStaticText.journey?.map((item) => (
                <Journey key={item.where} journey={item} />
            ))}
        </div>
    );
};

export default MobileJourney;
