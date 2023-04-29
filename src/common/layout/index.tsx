import { MutableRefObject } from 'react';
import Navbar from './navbar';
import Footer from './footer';

type AppLayoutProps = {
    children: React.ReactNode;
    heroRef: MutableRefObject<HTMLDivElement | null>;
};

const AppLayout = ({ children, heroRef }: AppLayoutProps) => {
    return (
        <div className="flex flex-col h-full min-h-screen">
            <Navbar heroRef={heroRef} />
            <div className="flex flex-col w-full flex-1">{children}</div>
            <Footer />
        </div>
    );
};

export default AppLayout;
