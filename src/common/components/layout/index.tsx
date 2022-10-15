import AppHeader from '../app-header';

type AppLayoutProps = {
    children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="bg-red-100 font-nunito">
            <AppHeader />
            {children}
        </div>
    );
};

export default AppLayout;
