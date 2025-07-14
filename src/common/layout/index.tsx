import Navbar from './navbar';
import Footer from './footer';

type AppLayoutProps = {
    children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="flex flex-col h-full min-h-screen">
            <Navbar />
            <div className="flex flex-col w-full flex-1 translate-y-[-62px]">{children}</div>
            <Footer />
        </div>
    );
};

export default AppLayout;
