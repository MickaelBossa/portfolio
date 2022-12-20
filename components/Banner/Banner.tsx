import { ImGithub, ImLinkedin } from 'react-icons/im';

export default function Banner() {
    return (
        <div className="h-screen">
            <div className='relative top-1/3'>
                <h1 className="text-left text-xl font-semibold lg:text-3xl">
                    Bienvenue sur mon portfolio ! Je m'appelle,{' '}
                    <strong className="text-[#5A4FCF] block text-5xl my-2 md:text-5xl lg:text-7xl xl:text-8xl">
                        Mickaël BOSSA
                    </strong>
                    Je suis un développeur front-end autodidacte basé près de
                    Lyon.
                </h1>
                <div className="flex space-x-4 mt-4">
                    <a
                        href="https://github.com/MickaelBossa"
                        className="socialNetworkBtn"
                        target={'_blank'}
                    >
                        <ImGithub className="mr-2" />
                        Github
                    </a>

                    <a
                        href="https://www.linkedin.com/in/micka%C3%ABl-bossa-860865259/"
                        className="socialNetworkBtn"
                        target={'_blank'}
                    >
                        <ImLinkedin className="mr-2" />
                        Linkedin
                    </a>
                </div>
            </div>
        </div>
    );
}
