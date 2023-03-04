import { createRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { useViewModel } from './viewmodel';

const DarkModeToggleButton = () => {
    // const overlayElement = overlayRef.current;
    // const toggleButtonElement = toggleRef.current;

    // useLayoutEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         console.log('xxx', window.matchMedia('(prefers-color-scheme: dark)'));

    //         if (
    //             localStorage.theme === 'dark' ||
    //             // !('theme' in localStorage) &&
    //             window.matchMedia('(prefers-color-scheme: dark)').matches
    //         ) {
    //             localStorage.setItem('theme', 'dark');
    //             document.documentElement.classList.add('dark');

    //             if (ele) {
    //                 ele.className = 'dark-mode active';
    //             }

    //             if (toggleButton) {
    //                 toggleButton.className = 'mode-tog active';
    //             }
    //         } else {
    //             localStorage.setItem('theme', 'light');
    //             document.documentElement.classList.remove('dark');

    //             if (ele) {
    //                 ele.className = 'dark-mode';
    //             }

    //             if (toggleButton) {
    //                 toggleButton.className = 'mode-tog';
    //             }
    //         }
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // if (typeof window !== 'undefined') {
    //     window
    //         .matchMedia('(prefers-color-scheme: dark)')
    //         .addEventListener('change', ({ matches }) => {
    //             if (matches) {
    //                 localStorage.setItem('theme', 'dark');
    //                 document.documentElement.classList.add('dark');
    //                 if (ele) {
    //                     ele.className = 'dark-mode active';
    //                 }
    //                 if (toggleButton) {
    //                     toggleButton.className = 'mode-tog active';
    //                 }
    //             } else {
    //                 localStorage.setItem('theme', 'light');
    //                 document.documentElement.classList.remove('dark');

    //                 if (ele) {
    //                     ele.className = 'dark-mode';
    //                 }
    //                 if (toggleButton) {
    //                     toggleButton.className = 'mode-tog';
    //                 }
    //             }
    //         });
    // }

    const { toggleButtonRef, overlayElementRef, handleThemeToggle } = useViewModel();

    return (
        <>
            <button ref={toggleButtonRef} onClick={handleThemeToggle} className="mode-tog" />

            <div className="container">
                <div ref={overlayElementRef} className="dark-mode" />
            </div>
        </>
    );
};

export default DarkModeToggleButton;
