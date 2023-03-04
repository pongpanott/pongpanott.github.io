import { cx } from '@emotion/css';

const HomePage = () => {
    return (
        <div className="w-screen relative z-[10] h-screen flex items-center justify-center">
            <p
                className={cx(
                    'text-[72px] transition-colors duration-1000 z-[10] text-black dark:text-white'
                )}
            >
                Hello world
            </p>
        </div>
    );
};

export default HomePage;
