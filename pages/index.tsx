import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import { FaBeer } from 'react-icons/fa';
import Banner from '../components/Banner';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Portfolio de Kamielo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className='md:max-w-7xl md:mx-auto'>
                <Banner />
            </main>

            {/* FOOTER */}
        </div>
    );
};

export default Home;
