import { BaseComponentProps } from 'common/types/base-component';
import { ComponentSize } from 'common/types/component-size';
import { cx } from '@emotion/css';

type CircleButtonProps = BaseComponentProps & {
    children: React.ReactNode;
    size?: ComponentSize;
    onClick: () => void;
};

const CircleButton = ({
    className,
    children,
    size = ComponentSize.SMALL,
    onClick,
}: CircleButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cx(
                className,
                'p-[5px] w-10 h-10 md:w-[55px] md:h-[55px] flex items-center justify-center rounded-full hover:bg-primary/20 active:bg-primary/50'
            )}
        >
            {children}
        </button>
    );
};

export default CircleButton;
