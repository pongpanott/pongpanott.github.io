import { defaultValue } from 'common/constants/default';
import { ForwardedRef } from 'react';

export const useWebScroller = () => {
    const handleWebScroll = (ref?: ForwardedRef<HTMLDivElement>) => {
        let top = 0;
        if (ref && typeof ref !== 'function' && 'current' in ref && ref.current) {
            top = ref.current.offsetTop - defaultValue.navbarOffset;
        }
        window.scrollTo({
            top,
            left: 0,
            behavior: 'smooth',
        });

        if (!ref) {
            history.replaceState({}, '', '.');
        }
    };

    return { handleWebScroll };
};
