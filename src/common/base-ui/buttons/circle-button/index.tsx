import { BaseComponentProps } from 'common/types/base-component';
import { cx } from '@emotion/css';

type CircleButtonProps = BaseComponentProps & {
    children: React.ReactNode;
    onClick: () => void;
};

const CircleButton = ({ className, children, onClick }: CircleButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cx(
                className,
                'p-[5px] w-10 h-10 md:w-[55px] cursor-pointer md:h-[55px] flex items-center justify-center rounded-full hover:bg-primary/20 active:bg-primary/50'
            )}
        >
            {children}
        </button>
    );
};

export default CircleButton;
