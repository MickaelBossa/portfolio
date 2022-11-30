/* eslint-disable react/no-unescaped-entities */
// Style
import styles from '../styles/Home.module.css';

// Next
import Head from 'next/head';

// Component
import SocialNetworkBtn from '../components/ui/SocialNetworkBtn/SocialNetworkBtn';

export default function Home() {
    return (
        <>
            <Head>
                <title>Mickaël BOSSA - Web developer</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=".container">
                <section className={styles.firstScreen}>
                    <h1 className={styles.title}>
                        Hey there! I'm
                        <span className={styles.name}> Mickaël Bossa </span>
                        <span className={styles.job}>
                            I'm a self-taught front-end developer based near
                            Lyon in France
                        </span>
                    </h1>
                    <div className={styles.socialNetworkIcons}>
                        <SocialNetworkBtn
                            title="Github"
                            src="/images/github-icon.svg"
                        />
                        <SocialNetworkBtn
                            title="Linkedin"
                            src="/images/linkedin-icon.svg"
                        />
                    </div>
                </section>
            </main>
        </>
    );
}
