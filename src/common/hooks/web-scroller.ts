import { MutableRefObject } from 'react';

export const useWebScroller = () => {
    const handleWebScroll = (ref?: MutableRefObject<HTMLDivElement | null> | null) => {
        window.scrollTo({
            top: ref ? ref.current?.offsetTop : 0,
            left: 0,
            behavior: 'smooth',
        });

        if (!ref) {
            history.replaceState({}, '', '.');
        }
    };

    return { handleWebScroll };
};
