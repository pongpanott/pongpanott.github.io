import { useMedia } from 'react-use';

export const useMediaSize = () => {
    const isMobile = useMedia('(max-width: 767px)', false);
    const isTablet = useMedia('(min-width: 768px) and (max-width: 1279px)', false);
    const isDesktop = useMedia('(min-width: 1280px)', false);

    return { isMobile, isTablet, isDesktop };
};
