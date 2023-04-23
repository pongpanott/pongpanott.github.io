import { MutableRefObject } from 'react';

export const useWebScroller = () => {
    const handleWebScroll = (ref: MutableRefObject<HTMLDivElement | null> | null) => {
        if (ref) {
            window.scrollTo({
                top: ref.current?.offsetTop,
                left: 0,
                behavior: 'smooth',
            });
        }
    };

    return { handleWebScroll };
};
