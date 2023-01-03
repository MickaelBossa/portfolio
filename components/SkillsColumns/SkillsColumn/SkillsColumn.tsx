import skillsData from '../../../constants/skillsData.json';
import * as SimpleIcon from 'react-icons/si';
import React, { ReactElement } from 'react';

const Icon = ({ iconName } : { iconName: string }) => {
    const icon = React.createElement(SimpleIcon[iconName]);
    return <div className="mr-3">{icon}</div>;
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
                                        <Icon iconName={skill.icon} />
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
