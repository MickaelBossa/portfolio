// Style
import styles from './Layout.module.css';

// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Type
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className={styles.layoutContainer}>
            <Header />
            <div className={styles.layoutContent}>{children}</div>
            <Footer />
        </div>
    );
}
