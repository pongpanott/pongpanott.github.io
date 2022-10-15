// type AppHeaderProps = {

import DesktopHeader from './desktop-header';

// };

const AppHeader = () => {
    return (
        <div className="flex h-[100px] items-center px-5 md:px-6 lg:justify-end lg:px-9 xl:px-16">
            <DesktopHeader />
        </div>
    );
};

export default AppHeader;
