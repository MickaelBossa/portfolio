// Style
import styles from './SocialNetworkButton.module.css';

// Next
import Link from 'next/link';
import Image from 'next/image';

export default function SocialNetworkBtn({
    src,
    title,
}: {
    src: string;
    title: string;
}) {
    return (
        <Link href="#" className={styles.btnContainer}>
            <Image src={src} height={36} width={36} alt={`${title} icon`} />
            <p className={styles.btnTxt}>{title}</p>
        </Link>
    );
}
