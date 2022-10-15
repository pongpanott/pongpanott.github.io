import { cx } from '@emotion/css';
import BaseButton, { BaseButtonProps } from '../base-button';

const OutlinedButton = ({ className, type, onClick, children, icon }: BaseButtonProps) => {
    return (
        <BaseButton
            type={type}
            onClick={onClick}
            icon={icon}
            className={cx(
                className,
                'min-w-[120px] border-2 border-primary-200 hover:bg-primary-50'
            )}
        >
            {children}
        </BaseButton>
    );
};

export default OutlinedButton;
