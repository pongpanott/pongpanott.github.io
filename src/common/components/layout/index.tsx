import AppHeader from '../app-header';

type AppLayoutProps = {
    children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="bg-[#f0e7db] font-nunito">
            <AppHeader />
            {children}
        </div>
    );
};

export default AppLayout;
