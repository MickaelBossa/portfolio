import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

export default function Header() {
    const [displayBurgerBtn, setDisplayBurgerBtn] = useState(true);

    return (
        <header className="sticky top-0 z-50 shadow-xl">
            <nav className="max-w-7xl mx-auto p-6 flex items-center justify-between bg-[#1d1d20]">
                <Link
                    href={'/'}
                    aria-label="Pas d'accueil du portfolio"
                    className="flex items-center"
                >
                    <Image
                        src={'/logo.png'}
                        alt=""
                        width={50}
                        height={50}
                        className="hidden md:inline md:mr-4"
                    />
                    <span
                        className="text-lg lg:text-xl flex"
                        aria-hidden="true"
                    >
                        Mickaël
                        <strong className='ml-2'>
                            B<span className="text-[#5A4FCF]">.</span>
                        </strong>
                    </span>
                </Link>
                <button
                    aria-label="toggle button"
                    aria-expanded="false"
                    className="w-7 md:hidden"
                    onClick={() => setDisplayBurgerBtn(!displayBurgerBtn)}
                >
                    {displayBurgerBtn ? (
                        <RxHamburgerMenu
                            style={{ width: '30px', height: '30px' }}
                        />
                    ) : (
                        <RxCross2 style={{ width: '30px', height: '30px' }} />
                    )}
                </button>

                <ul
                    className={`${
                        displayBurgerBtn && '-translate-y-full'
                    } transition duration-300 w-full absolute top-full left-0 -z-10 text-[#5A4FCF] border-b border-gray-200 flex flex-col items-center md:static md:z-10 md:transform-none md:border-none md:flex-row md:justify-end`}
                >
                    <li className="headerLinkContainer">
                        <Link
                            href={'/#competences'}
                            className="headerLink"
                            onClick={() => setDisplayBurgerBtn(true)}
                        >
                            01- Compétences
                        </Link>
                    </li>
                    <li className="headerLinkContainer">
                        <Link
                            href={'/#projets'}
                            className="headerLink"
                            onClick={() => setDisplayBurgerBtn(true)}
                        >
                            02- Projets
                        </Link>
                    </li>
                    <li className="headerLinkContainer">
                        <Link
                            href={'/#contact'}
                            className="headerLink"
                            onClick={() => setDisplayBurgerBtn(true)}
                        >
                            03- Contact
                        </Link>
                    </li>
                    <li className="headerLinkContainer">
                        <Link
                            href={'/blog'}
                            className="headerLink"
                            onClick={() => setDisplayBurgerBtn(true)}
                        >
                            04- Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
