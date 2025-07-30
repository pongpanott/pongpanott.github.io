import { BaseComponentProps } from 'common/types/base-component';
import { css, cx } from '@emotion/css';
import React from 'react';

type DrawerProps = BaseComponentProps & {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    children: React.ReactNode;
};

const Drawer = ({ className, isOpen, setIsOpen, children }: DrawerProps) => {
    return (
        <>
            {isOpen && <div className="fixed inset-0 top-0 z-40 flex h-screen w-screen" />}
            <div
                className={cx(
                    isOpen && 'inset-0 h-screen w-screen',
                    isOpen &&
                        css`
                            transition: opacity 0.5s ease-in;
                            opacity: 0.3;
                        `,
                    !isOpen &&
                        css`
                            transition: opacity 1s ease-out;
                            opacity: 0;
                        `,
                    'fixed top-0 z-50 flex bg-black'
                )}
                onClick={() => {
                    setIsOpen(false);
                }}
            />
            <div
                className={cx(
                    className,
                    isOpen &&
                        css`
                            transition: right 0.3s ease-in-out;
                            position: fixed;
                            right: 0px !important;
                            box-shadow: 0px 30px 15px 10px rgba(0, 0, 0, 0.08);
                        `,

                    !isOpen &&
                        css`
                            right: -256px;
                        `,
                    'top-0 z-60 flex h-screen w-[256px] flex-1 grow flex-col bg-white font-nunito',
                    css`
                        transition: right 0.3s ease-in-out;
                        position: fixed;
                    `
                )}
            >
                {children}
            </div>
        </>
    );
};

export default Drawer;
