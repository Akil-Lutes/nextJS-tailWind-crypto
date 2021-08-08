import Link from 'next/link';
import 'tailwindcss/tailwind.css'

const SearchBar = ({ ...rest }) => {
    return (
        <div className="p-8">
            <div className="bg-white flex items-center rounded-full shadow-xl">
                <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" {...rest} />
            </div>
        </div>
    )
}

export default SearchBar
