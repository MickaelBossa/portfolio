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
                        <Link className={styles.navlink} href="#">
                            01- Skills
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navlink} href="#">
                            02- Project
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navlink} href="#">
                            03- Contact
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navlink} href="#">
                            04- Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
