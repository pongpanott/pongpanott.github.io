import '../styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import DarkModeToggleButton from '../modules/theme/dark-mode-toggle-button';
import '../common/locale/i18n';

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

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${apercu.variable} font-sans`}>
            <Component {...pageProps} />

            <DarkModeToggleButton />
        </div>
    );
}
