import { useTransition } from 'react';
import Text from '../../../../common/base-ui/text';
import { useTranslation } from 'react-i18next';
import { css, cx } from '@emotion/css';

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <div className="flex h-screen md:px-[100px] md:py-[120px] flex-col px-[50px] py-[70px]">
            <Text className="text-[28px] lg:text-[36px] lg:leading-[48px] text-light md:text-[32px] md:leading-[48px] leading-8">
                {t('hero_hello')}
            </Text>

            <Text className="my-auto max-w-[700px] lg:text-[48px] lg:leading-[64px] font-light md:text-[40px] md:leading-[52px] text-[36px] leading-[48px] tracking-[0.1px]">
                <span
                    className={cx(css`
                        span {
                            font-weight: 700;
                        }
                    `)}
                    dangerouslySetInnerHTML={{
                        __html: t('hero_my_name', { name: 'Pongpanot Tunkrongsin' }),
                    }}
                />
            </Text>
            <Text className="tracking-[0.1px] leading-5 md:text-lg md:leading-6">
                <span>{t('hero_get_in_touch')}</span>
                <a href="mailto:plurm.pongpanot@gmail.com" className="underline">
                    {` plurm.pongpanot@gmail.com`}
                </a>
            </Text>
        </div>
    );
};

export default HeroSection;
