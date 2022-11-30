// Style
import styles from './ProjectCard.module.css';

// Next
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
    link,
    title,
    description,
}: {
    link: string;
    title: string;
    description: string;
}) {
    return (
        <Link href="#">
            <div className={styles.cardContainer}>
                <div className={styles.topIcons}>
                    <Image
                        src={link}
                        height={30}
                        width={30}
                        alt={`${title} icon`}
                    />

                    <Link href="#">
                        <Image
                            src="/images/git-icon.svg"
                            height={30}
                            width={30}
                            alt="Github icon"
                        />
                    </Link>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Link>
    );
}
