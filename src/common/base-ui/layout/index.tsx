import Navbar from './navbar';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col h-full min-h-screen mx-auto w-full max-w-[940px]">
            <Navbar />
            <div className="flex flex-col px-[18px] pb-6 sm:p-8 sm:pt-0 flex-1">{children}</div>
        </div>
    );
};

export default AppLayout;
