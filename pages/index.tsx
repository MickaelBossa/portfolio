import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import SkillsColumns from '../components/SkillsColumns/SkillsColumns';
import ProjectCards from '../components/ProjectCards/ProjectCards';

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

                <section className='mb-10'>
                    <h2 className="subTitle">
                        Compétences
                    </h2>
                    <SkillsColumns />
                </section>

                <section className='mb-10'>
                    <h2 className='subTitle'>Projets professionels</h2>
                    <ProjectCards workProject={true} />
                </section>

                <section className='mb-10'>
                    <h2 className='subTitle'>Projets personnels</h2>
                    <ProjectCards workProject={false} />
                </section>
            </main>

            {/* FOOTER */}
        </div>
    );
};

export default Home;
