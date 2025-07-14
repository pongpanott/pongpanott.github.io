import Navbar from './navbar';
import Footer from './footer';
import { DEFAULT_VALUE } from '@constants';

type AppLayoutProps = {
    children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="flex flex-col h-full min-h-screen">
            <Navbar />
            <div
                className={`flex flex-col w-full flex-1 translate-y-[-${DEFAULT_VALUE.navbarOffset}px]`}
            >
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default AppLayout;
