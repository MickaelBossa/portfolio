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
                .map(({ title, content, projectSrc, github, websiteLink }) => (
                    <ProjectCard
                        projectTitle={title}
                        projectContent={content}
                        projectSrc={projectSrc}
                        githubLink={github}
                        websiteLink={websiteLink}
                    />
                ))}
        </div>
    );
}
