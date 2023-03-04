import { useEffect, useRef, useState } from 'react';

export const useViewModel = () => {
    const [overlayElement, setOverlayElement] = useState<HTMLDivElement>();
    const [toggleButtonElement, settoggleButtonElement] = useState<HTMLButtonElement>();

    const toggleButtonRef = useRef<HTMLButtonElement>(null);
    const overlayElementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setOverlayElement(overlayElementRef.current as HTMLDivElement);
        settoggleButtonElement(toggleButtonRef.current as HTMLButtonElement);
    }, []);

    const handleThemeToggle = () => {
        if (localStorage.getItem('theme') === 'light') {
            document.documentElement.classList.add('dark');

            localStorage.setItem('theme', 'dark');
            overlayElement!.className = 'dark-mode active';
            toggleButtonElement!.className = 'mode-tog active';
        } else {
            document.documentElement.classList.remove('dark');

            localStorage.setItem('theme', 'light');
            overlayElement!.className = 'dark-mode';
            toggleButtonElement!.className = 'mode-tog';
        }
    };

    return { toggleButtonRef, overlayElementRef, handleThemeToggle };
};
