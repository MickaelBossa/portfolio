import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SkillsColumn from '../components/SkillsColumn';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Portfolio de Kamielo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="max-w-md mx-auto md:max-w-xl md:mx-auto lg:max-w-4xl xl:max-w-6xl">
                <Banner />

                <section>
                    <h2 className="text-center font-semibold text-2xl md:text-4xl">
                        Compétences
                    </h2>
                    <SkillsColumn />
                </section>
            </main>

            {/* FOOTER */}
        </div>
    );
};

export default Home;
