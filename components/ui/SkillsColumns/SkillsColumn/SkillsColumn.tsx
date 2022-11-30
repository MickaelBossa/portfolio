// Style
import styles from './SkillsColumn.module.css';

// Next
import Link from 'next/link';
import Image from 'next/image';

export default function SkillsColumn({
    title,
    content,
}: {
    title: string;
    content: { icon: string; skill: string }[];
}) {
    return (
        <div>
            <h3>{title}</h3>
            <ul className={styles.skillsList}>
                {content.map((element) => (
                    <li key={content.indexOf(element)}>
                        <Link className={styles.skillContainer} href="#">
                            <Image
                                className={styles.skillIcon}
                                src={element.icon}
                                height={30}
                                width={30}
                                alt={`${element.skill} icon`}
                            />
                            {element.skill}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
