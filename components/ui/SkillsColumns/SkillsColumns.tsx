// Style
import styles from './SkillsColumns.module.css';

// Component
import SkillsColumn from './SkillsColumn/SkillsColumn';

export default function SkillsColumns() {
    return (
        <div className={styles.skillsColumns}>
            <SkillsColumn
                title="Front-end"
                content={[
                    {
                        icon: '/images/typescript-icon.svg',
                        skill: 'Typescript',
                    },
                    { icon: '/images/nextjs-icon.svg', skill: 'Next.js' },
                    { icon: '/images/react-icon.svg', skill: 'React' },
                    { icon: '/images/react-icon.svg', skill: 'React Native' },
                ]}
            />
            <SkillsColumn
                title="Back-end"
                content={[
                    { icon: '/images/nodejs-icon.svg', skill: 'Node.js' },
                    { icon: '/images/mariadb-icon.svg', skill: 'MariaDB' },
                ]}
            />
            <SkillsColumn
                title="Design"
                content={[
                    { icon: '/images/figma-icon.svg', skill: 'Figma' },
                    { icon: '/images/photoshop-icon.svg', skill: 'Photoshop' },
                    {
                        icon: '/images/illustrator-icon.svg',
                        skill: 'Illustrator',
                    },
                ]}
            />
            <SkillsColumn
                title="Other"
                content={[
                    { icon: '/images/git-icon.svg', skill: 'Git & Github' },
                    {
                        icon: '/images/prestashop-icon.svg',
                        skill: 'Prestashop',
                    },
                ]}
            />
        </div>
    );
}
