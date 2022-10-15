import { cx } from '@emotion/css';
import { BaseComponentProps } from '../../../types/base-component.type';

export type BaseButtonProps = BaseComponentProps & {
    type?: 'button' | 'submit' | 'reset';
    onClick: () => void;
    children: React.ReactNode;
    icon?: React.ReactNode;
};

const ButtonIcon = (icon: React.ReactNode) => icon;

const BaseButton = ({ className, type, onClick, children, icon }: BaseButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={cx(
                className,
                'flex h-9 items-center justify-center px-4 md:h-[44px] lg:h-[52px]',
                'rounded-lg text-sm font-semibold hover:bg-primary-100 md:text-base lg:text-lg',
                'transition-colors duration-300'
            )}
        >
            {ButtonIcon(icon)} {children}
        </button>
    );
};

export default BaseButton;
