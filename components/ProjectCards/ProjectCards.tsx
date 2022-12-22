import ProjectCard from './ProjectCard/ProjectCard';
import projectData from '../../constants/projectData.json';

export default function ProjectCards({
    workProject,
}: {
    workProject: boolean;
}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projectData
                .filter((project) => project.workProject === workProject)
                .map((project) => (
                    <ProjectCard {...project} key={project.websiteLink} />
                ))}
        </div>
    );
}
