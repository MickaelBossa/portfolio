import skillsData from '../../../constants/skillsData.json';
import * as AllIcons from 'react-icons/si';

const Icon = ({ iconName }: { iconName: keyof typeof AllIcons }) => {
    const IconComponent = AllIcons[iconName];
    return <div className="mr-3">{<IconComponent />}</div>;
};

export default function SkillsColumn() {
    return (
        <>
            {skillsData.map((column) => (
                <div>
                    <h3 className="skillsTitle">{column.title}</h3>
                    <div className="flex justify-center mt-3">
                        <ul className="mb-5 lg:mb-16">
                            {column.skills.map((skill) => (
                                <li className="skillContainer">
                                    <>
                                        <Icon
                                            iconName={
                                                skill.icon as keyof typeof AllIcons
                                            }
                                        />
                                        {skill.skill}
                                    </>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
}
