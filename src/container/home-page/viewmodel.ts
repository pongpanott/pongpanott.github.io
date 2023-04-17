import { useWebScroller } from 'common/hooks/web-scroller';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export const useViewModel = () => {
    const heroRef = useRef<HTMLDivElement | null>(null);
    const meRef = useRef<HTMLDivElement | null>(null);
    const workRef = useRef<HTMLDivElement | null>(null);

    const { handleWebScroll } = useWebScroller();

    const { asPath } = useRouter();

    useEffect(() => {
        const currentRef = asPath.includes('#me')
            ? meRef
            : asPath.includes('#work')
            ? workRef
            : null;

        handleWebScroll(currentRef);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [asPath]);

    return { heroRef, meRef, workRef };
};
