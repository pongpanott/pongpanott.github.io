import { BaseComponentProps } from '@/common/types/base-component';
import { cx } from '@emotion/css';

type HeaderTextProps = BaseComponentProps & {
    message: string;
    fontSize?: 'base' | 'lg' | 'xl';
};

const fontSizeMapping: Record<string, string> = {
    base: 'text-[48px] leading-[53px]',
    lg: 'text-[66px] leading-[73px]',
};

const HeaderText = ({ className, message, fontSize = 'base' }: HeaderTextProps) => {
    return (
        <p className={cx(className, fontSizeMapping[fontSize], 'text-quattrocento')}>{message}</p>
    );
};

export default HeaderText;
