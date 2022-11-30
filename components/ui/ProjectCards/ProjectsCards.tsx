// Style
import styles from './ProjectCards.module.css'

// Component
import ProjectCard from './ProjectCard/ProjectCard'

export default function ProjectsCards() {

    const projects = [
        {
            title: 'Equine and canine masseur website',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur alias eius perspiciatis asperiores aliquid, cum illum? Alias voluptatum perferendis magnam tempore doloribus nulla saepe explicabo nam esse inventore assumenda, voluptas obcaecati ipsam dolorem a quia possimus optio. Nostrum nobis repudiandae veritatis sunt voluptas molestiae, velit corrupti, culpa mollitia laboriosam suscipit!',
            icon: '/images/pauline-logo.png',
        },
        {
            title: 'Saddlery online store',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur alias eius perspiciatis asperiores aliquid, cum illum? Alias voluptatum perferendis magnam tempore doloribus nulla saepe explicabo nam esse inventore assumenda, voluptas obcaecati ipsam dolorem a quia possimus optio. Nostrum nobis repudiandae veritatis sunt voluptas molestiae, velit corrupti, culpa mollitia laboriosam suscipit!',
            icon: '/images/peyron-logo.png',
        },
        {
            title: 'Personal blog',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur alias eius perspiciatis asperiores aliquid, cum illum? Alias voluptatum perferendis magnam tempore doloribus nulla saepe explicabo nam esse inventore assumenda, voluptas obcaecati ipsam dolorem a quia possimus optio. Nostrum nobis repudiandae veritatis sunt voluptas molestiae, velit corrupti, culpa mollitia laboriosam suscipit!',
            icon: '/vercel.svg',
        },
    ]

  return (
    <div className={styles.cardsContainer}>
        {projects.map((project) => (
            <ProjectCard 
            key={projects.indexOf(project)}
            link={project.icon}
            title={project.title}
            description={project.description}
            />
        ))}
    </div>
  )
}
