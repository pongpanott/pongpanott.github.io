import { cx } from '@emotion/css';
import { BaseComponentProps } from '../../types/base-component';
import { forwardRef } from 'react';

type TextProps = BaseComponentProps & {
    children: React.ReactNode;
};

const Text = forwardRef<HTMLParagraphElement, TextProps>(({ className, children }, ref) => {
    return (
        <p
            ref={ref}
            className={cx(
                className,
                'z-[1] transition-colors duration-500 text-light dark:text-dark'
            )}
        >
            {children}
        </p>
    );
});

Text.displayName = 'Text';

export default Text;
