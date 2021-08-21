import Link from 'next/link';
import router, { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoin, faEthereum} from '@fortawesome/free-brands-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { useTheme } from 'next-themes'
import 'tailwindcss/tailwind.css'



const Header = () => {
    const { systemTheme, theme, setTheme} = useTheme();
    // makes sure there's no orientation mismatch
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

   const renderTheme = () => {
        if(!mounted) {
            return null
        }

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if(currentTheme === 'dark') {
            return(
                <h1>Light<FontAwesomeIcon className="text-4xl" icon={faSun} role="button" onClick={() => setTheme ('light')} ></FontAwesomeIcon> </h1>
            )
        }

        else {
            return(
                <h1>Dark<FontAwesomeIcon className="text-4xl" icon={faMoon} role="button" onClick={() => setTheme ('dark')}> </FontAwesomeIcon></h1>
            )
        }
    }

    return(
        <header className="dark:border-gray-700 body-font text-black text-opacity-50 dark:text-white dark:text-opacity-50">
                    <FontAwesomeIcon icon={faBitcoin} className="flex hover:text-gray-600 justify-center mx-auto w-8 text-9xl bitcoin" size="lg" onClick={() => router.back()} />
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-black text-opacity-50 dark:text-white dark:text-opacity-50 mb-4 md:mb-0">
                    <a className="hover:text-gray-600">
                        <FontAwesomeIcon icon={faEthereum} className="ethereum text-5xl w-8" onClick={() => router.back()} />
                    </a>
                <span className="ml-3 text-xl">CryptoList</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-28 hover:text-gray-600"></a>
                </nav>
                {renderTheme()}
            </div>
        </header>
            )
        }

export default Header