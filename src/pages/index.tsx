import localFont from '@next/font/local';

const apercu = localFont({
    src: [
        {
            path: '../../public/fonts/apercu-light.woff2',
            weight: '300',
        },
        {
            path: '../../public/fonts/apercu-regular.woff2',
            weight: '400',
        },
        {
            path: '../../public/fonts/apercu-medium.woff2',
            weight: '500',
        },
        {
            path: '../../public/fonts/apercu-bold.woff2',
            weight: '700',
        },
    ],
    variable: '--font-apercu',
});

export default function Home() {
    return (
        <div className={`${apercu.variable} font-sans`}>
            <div className="h-screen w-screen flex items-center justify-center">
                <p className="text-[72px]">Hello world</p>
            </div>
        </div>
    );
}
