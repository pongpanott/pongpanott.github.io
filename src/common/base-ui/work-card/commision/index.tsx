import commissionBackground from 'assets/images/work/comission/background.png';

import { css, cx } from '@emotion/css';
import Link from 'next/link';
import { defaultValue } from '../../../constants/default';
import Icon from '../../icon';
import { AppIconEnum } from '../../icon/viewmodel';
import { workStaticText } from '../../../constants/static-text/work';

const CommissionCard = () => {
    return (
        <div
            className={cx(
                'relative px-[18px] py-[67px] pb-[47px] xl:py-[68px] md:py-[21px] text-center',
                css`
                    background-image: url(${commissionBackground.src});
                `
            )}
        >
            <div className="md:w-[494px] xl:w-full md:mx-auto">
                <p className="text-xl md:mb-4 md:text-2xl mb-6 xl:mb-5">
                    {workStaticText.workCard.commission.title}
                </p>
                <p className="text-xs mb-16 xl:text-xs xl:mb-16 md:mb-8 whitespace-pre-line md:text-sm">
                    {' '}
                    {workStaticText.workCard.commission.description}
                </p>
                <Link
                    href={`mailto:${defaultValue.email}`}
                    className="w-fit mx-auto flex items-center gap-x-2"
                >
                    <span className="text-base">Get in touch</span>
                    <Icon icon={AppIconEnum.ARROW_RIGHT} iconSize={16} />
                </Link>
            </div>
        </div>
    );
};

export default CommissionCard;
