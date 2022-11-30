// Style
import '../styles/globals.css';

// Type
import type { AppProps } from 'next/app';

// Component
import Layout from '../components/ui/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
