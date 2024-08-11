import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Cinema</Link>. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">LinkdIn</a>
            </li>
            <li>
                <a href="https://x.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Twitter</a>
            </li>
            <li>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:underline">You Tube</a>
            </li>
        </ul>
    </footer>

  )
}
