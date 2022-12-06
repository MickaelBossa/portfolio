// Style
import styles from './Header.module.css';

// Next
import Link from 'next/link';

export default function Header() {
    return (
        <header className="container">
            <nav>
                <ul className={styles.navlinks}>
                    <li>
                        <Link
                            className={styles.navlink}
                            href="/#skills"
                            scroll={false}
                        >
                            01- Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.navlink}
                            href="/#projects"
                            scroll={false}
                        >
                            02- Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.navlink}
                            href="/#contact"
                            scroll={false}
                        >
                            03- Contact
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navlink} href="/admin">
                            04- Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
