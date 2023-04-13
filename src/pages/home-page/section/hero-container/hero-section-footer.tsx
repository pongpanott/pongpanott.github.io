import Icon from 'common/base-ui/icon';
import { useMediaSize } from 'common/hooks/media-size';
import { AppIconEnum } from 'common/base-ui/icon/viewmodel';
import { defaultValue } from '@/common/constants/default';
import Link from 'next/link';
import { css, cx } from '@emotion/css';

const HeroSectionFooter = () => {
    const { isMobile } = useMediaSize();

    return (
        <div className="flex w-full gap-x-2 items-center justify-between">
            <a href={`mailto:${defaultValue.email}`} className="spacing-minus-two-perc text-xs">
                {defaultValue.email}
            </a>

            <div className="flex items-center gap-x-[10px] md:gap-x-4">
                <Link
                    href={defaultValue.github as string}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon={AppIconEnum.GITHUB} />
                </Link>
                <Link href={defaultValue.in as string} target="_blank" rel="noopener noreferrer">
                    <Icon icon={AppIconEnum.LINKEDIN} />
                </Link>
            </div>
        </div>
    );
};

export default HeroSectionFooter;
