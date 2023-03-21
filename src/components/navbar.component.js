import Link from "next/link"

export function Navbar() {
    return(
        <ul class="flex flex-wrap text-1xl justify-center font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="mr-2">
                <a href="/" className="inline-block p-4  pt-10 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Dashboard</a>
            </li>
            {/* <li class="mr-2">
                <a href={'/about'} className="inline-block p-4 pt-10 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Profile</a>
            </li> */}
            <li class="mr-2">
                <a href="/product" className="inline-block p-4 pt-10 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">People</a>
            </li>
        </ul>

    )
}