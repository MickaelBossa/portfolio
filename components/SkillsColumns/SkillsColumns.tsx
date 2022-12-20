import {
    SiTypescript,
    SiNextdotjs,
    SiReact,
    SiNodedotjs,
    SiMariadb,
    SiFigma,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiGithub,
    SiPrestashop,
    SiTailwindcss,
} from 'react-icons/si';

export default function SkillsColumn() {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4">
                <div>
                    <h3 className="skillTitle">Front-end</h3>
                    <div className="flex justify-center mt-3">
                        <ul>
                            <li className="skillContainer">
                                <SiTypescript className="mr-3" />
                                Typescript
                            </li>
                            <li className="skillContainer">
                                <SiNextdotjs className="mr-3" />
                                Next.js
                            </li>
                            <li className="skillContainer">
                                <SiReact className="mr-3" />
                                React
                            </li>
                            <li className="skillContainer">
                                <SiReact className="mr-3" />
                                React Native
                            </li>
                            <li className="skillContainer">
                                <SiTailwindcss className="mr-3" />
                                Tailwindcss
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="skillTitle">Back-end</h3>
                    <div className="flex justify-center mt-3">
                        <ul>
                            <li className="skillContainer">
                                <SiNodedotjs className="mr-3" />
                                Node.js
                            </li>
                            <li className="skillContainer">
                                <SiMariadb className="mr-3" />
                                MariaDB
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="skillTitle">Design</h3>
                    <div className="flex justify-center mt-3">
                        <ul>
                            <li className="skillContainer">
                                <SiFigma className="mr-3" />
                                Figma
                            </li>
                            <li className="skillContainer">
                                <SiAdobephotoshop className="mr-3" />
                                Photoshop
                            </li>
                            <li className="skillContainer">
                                <SiAdobeillustrator className="mr-3" />
                                Illustrator
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="skillTitle">Autres</h3>
                    <div className="flex justify-center mt-3">
                        <ul>
                            <li className="skillContainer">
                                <SiGithub className="mr-3" />
                                Git
                            </li>
                            <li className="skillContainer">
                                <SiPrestashop className="mr-3" />
                                Prestashop
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
