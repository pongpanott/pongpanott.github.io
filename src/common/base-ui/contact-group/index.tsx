import { cx } from '@emotion/css';
import Icon from 'common/base-ui/icon';
import { AppIconEnum } from 'common/base-ui/icon/viewmodel';
import { EXTERNAL_LINK } from 'common/constants';
import { BaseComponentProps } from 'common/types/base-component';
import Link from 'next/link';

type ContactGroupProps = BaseComponentProps;

const ContactGroup = ({ className }: ContactGroupProps) => {
    return (
        <div className={cx(className, 'flex gap-x-3 md:gap-x-4')}>
            <Link
                href={`mailto:${EXTERNAL_LINK.contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon icon={AppIconEnum.GMAIL} />
            </Link>
            <Link
                href={EXTERNAL_LINK.contact.github as string}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon icon={AppIconEnum.GITHUB} />
            </Link>
            <Link href={EXTERNAL_LINK.contact.linkedIn} target="_blank" rel="noopener noreferrer">
                <Icon icon={AppIconEnum.LINKEDIN} />
            </Link>
        </div>
    );
};

export default ContactGroup;
