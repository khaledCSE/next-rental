import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { RentalProvider } from '../contexts/rental.context';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RentalProvider>
            <Component {...pageProps} />
        </RentalProvider>
    );
}
export default MyApp;
