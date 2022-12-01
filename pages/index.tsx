/* eslint-disable react/no-unescaped-entities */
// Style
import styles from '../styles/Home.module.css';

// Next
import Head from 'next/head';
import Image from 'next/image';

// Component
import SocialNetworkButtons from '../components/ui/SocialNetworkButtons/SocialNetworkButtons';
import SkillsColumns from '../components/ui/SkillsColumns/SkillsColumns';
import ProjectsCards from '../components/ui/ProjectCards/ProjectsCards';
import ContactForm from '../components/ui/ContactForm/ContactForm';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Mickaël BOSSA - Web developer</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container">
                <section className={styles.firstScreen}>
                    <h1 className={styles.title}>
                        Hey there! I'm
                        <span className={styles.name}> Mickaël Bossa </span>
                        <span className={styles.job}>
                            I'm a self-taught front-end developer based near
                            Lyon in France
                        </span>
                    </h1>
                    <SocialNetworkButtons />
                </section>
                <section>
                    <h2 className={styles.subtitle}>Skills</h2>
                    <SkillsColumns />
                </section>
                <section>
                    <h2 className={styles.subtitle}>Projects</h2>
                    <ProjectsCards />
                </section>
            </main>
            <section className={styles.contactSection}>
                <div className={styles.contactForm}>
                    <h2 className={styles.subtitle}>Contact me</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus suscipit minima consectetur non, excepturi ad
                        sit? Corporis ullam, aspernatur neque quidem tempore
                        voluptate assumenda deserunt officia aliquid in quaerat
                        quasi!
                    </p>
                    <ContactForm />
                </div>
                <div>
                    <Image
                        src="/images/france-map-2.png"
                        height={1000}
                        width={800}
                        alt="Map of France"
                    />
                </div>
            </section>
        </div>
    );
}
