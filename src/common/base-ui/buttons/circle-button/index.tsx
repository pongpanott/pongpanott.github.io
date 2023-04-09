import { BaseComponentProps } from 'common/types/base-component';
import { ComponentSize } from 'common/types/component-size';
import { cx } from '@emotion/css';

type CircleButtonProps = BaseComponentProps & {
    children: React.ReactNode;
    size?: ComponentSize;
};

const CircleButton = ({ className, children, size = ComponentSize.SMALL }: CircleButtonProps) => {
    return (
        <button
            className={cx(
                className,
                'p-[5px] w-10 h-10 sm:w-[55px] sm:h-[55px] flex items-center justify-center rounded-full hover:bg-primary/20 active:bg-primary/50'
            )}
        >
            {children}
        </button>
    );
};

export default CircleButton;
