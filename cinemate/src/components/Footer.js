import { link } from "react-react-dom";

export const footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <link to="/" className="hover:underline">Cinemate™</link>. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="https://www.instagram.com/rahulnaik4343.ul" targrt="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
            </li>
            <li>
                <a href="https://www.youtube.com/rahul.ul" targrt="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">YouTube</a>
            </li>
            <li>
                <a href="https://www.github.com/rahul.ul" targrt="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
            </li>
        </ul>
    </footer>
  )
}

