import { BaseComponentProps } from 'common/types/base-component';
import { cx } from '@emotion/css';

type HeaderTextProps = BaseComponentProps & {
    message: string;
    fontSize?: 30 | 36 | 40 | 48 | 52 | 66;
};

const fontSizeMapping: Record<string, string> = {
    30: 'text-[30px] leading-[33px]',
    36: 'text-[36px] leading-[40px]',
    40: 'text-[40px] leading-[44px]',
    48: 'text-[48px] leading-[53px]',
    52: 'text-[52px] leading-[58px]',
    66: 'text-[66px] leading-[73px]',
};

const HeaderText = ({ className, message, fontSize = 48 }: HeaderTextProps) => {
    return (
        <p className={cx(className, 'font-quattrocento', fontSizeMapping[fontSize])}>{message}</p>
    );
};

export default HeaderText;
