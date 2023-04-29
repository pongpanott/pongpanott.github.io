import { useWebScroller } from 'common/hooks/web-scroller';
import { HashRouteEnum } from 'common/types/hash-route';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export const useViewModel = () => {
    const meRef = useRef<HTMLDivElement | null>(null);
    const workRef = useRef<HTMLDivElement | null>(null);

    const { handleWebScroll } = useWebScroller();
    const router = useRouter();

    useEffect(() => {
        const hashName = window.location.hash;

        handleWebScroll(
            hashName.includes(HashRouteEnum.ME)
                ? meRef
                : hashName.includes(HashRouteEnum.WORK)
                ? workRef
                : null
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router]);

    return { meRef, workRef };
};
