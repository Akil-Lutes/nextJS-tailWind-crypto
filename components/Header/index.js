import Link from 'next/link';
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
                <FontAwesomeIcon icon={faSun} role="button" onClick={() => setTheme ('light')} />
            )
        }

        else {
            return(
                <FontAwesomeIcon icon={faMoon} role="button" onClick={() => setTheme ('dark')} />
            )
        }
    }

    return(
        <header className="border border-red-800 dark:border-gray-700 body-font text-black text-opacity-50 dark:text-white dark:text-opacity-50">
            <FontAwesomeIcon icon={faBitcoin} className="flex justify-center mx-auto w-8 text-9xl bitcoin" size="lg" />
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <FontAwesomeIcon icon={faEthereum} className="ethereum text-5xl w-8" />
            <span className="ml-3 text-xl">CryptoList</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Exchanges</a>
            <a className="mr-5 hover:text-gray-900">Coins</a>
            </nav>
            {renderTheme()}
        </div>
        </header>
            )
        }

export default Header

// text-gray-600