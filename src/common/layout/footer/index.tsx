import ContactGroup from 'common/base-ui/contact-group';
import { SITE_CONTENT } from '@constants';

const Footer = () => {
    return (
        <div className="pb-6 px-[18px] md:px-8 md:pb-8">
            <div className="flex gap-x-2 justify-between items-center w-full max-w-[940px] mx-auto">
                <p className="flex-1 text-xs">{SITE_CONTENT.footer}</p>
                <ContactGroup />
            </div>
        </div>
    );
};

export default Footer;
