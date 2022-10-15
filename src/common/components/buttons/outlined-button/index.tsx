import { cx } from '@emotion/css';
import BaseButton, { BaseButtonProps } from '../base-button';

const OutlinedButton = ({ className, type, onClick, children, icon }: BaseButtonProps) => {
    return (
        <BaseButton
            type={type}
            onClick={onClick}
            icon={icon}
            className={cx(className, 'min-w-[120px] border border-red-400')}
        >
            {children}
        </BaseButton>
    );
};

export default OutlinedButton;
