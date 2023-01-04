import Image from 'next/image';
import { SiGithub } from 'react-icons/si';
import { ProjectDataProps } from '../../../typing';

export default function ProjectCard({
    content,
    title,
    projectSrc,
    github,
    websiteLink,
}: ProjectDataProps) {
    return (
        <div className="relative group w-full h-72 overflow-hidden bg-black m-auto rounded-xl">
            <Image
                src={projectSrc}
                alt="Image d'un projet réalisé par Mickaël"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            />
            {github && (
                <a href={github} target={'_blank'}>
                    <SiGithub
                        style={{ width: '30px', height: '30px' }}
                        className="relative top-5 z-40 left-[90%] cursor-pointer bg-black/50 rounded-full hover:shadow-xl hover:scale-110 transition duration-150 hover:text-[#5A4FCF] hover:bg-transparent"
                    />
                </a>
            )}
            <div className="absolute bg-gradient-to-t from-black via-black/80 w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                <div className="absolute w-full flex place-content-center">
                    <p className="capitalize font-bold text-3xl text-center text-white mt-9">
                        {title}
                    </p>
                </div>
                <div className="absolute w-full flex place-content-center mt-24">
                    <p className="text-center font-semibold w-4/5 text-white mt-12">
                        {content}
                    </p>
                </div>
                <button className="flex justify-center items-center w-1/3 bg-transparent px-4 py-1 rounded-full text-xl text-[#5A4FCF] border-[#5A4FCF] border-2 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#5A4FCF] duration-[700ms,1000ms] transition-[color,box-shadow] md:px-6 md:py-2 absolute left-1/3 bottom-4 lg:left-1/4 lg:w-1/2 lg:hover:shadow-[inset_20rem_0_0_0] lg:hover:shadow-[#5A4FCF]">
                    <a href={websiteLink} target={'_blank'}>
                        Visiter le site
                    </a>
                </button>
            </div>
        </div>
    );
}
