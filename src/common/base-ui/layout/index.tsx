import Navbar from './navbar';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col h-full min-h-screen px-[18px] pb-6 sm:p-8 sm:pt-0">
            <Navbar />
            <div className="flex flex-col mx-auto w-full max-w-[940px] flex-1">{children}</div>
        </div>
    );
};

export default AppLayout;
