import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import SkillsColumns from '../components/SkillsColumns/SkillsColumns';

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
                    <h2 className="text-center font-semibold text-3xl md:text-5xl">
                        Compétences
                    </h2>
                    <SkillsColumns />
                </section>
            </main>

            {/* FOOTER */}
        </div>
    );
};

export default Home;
