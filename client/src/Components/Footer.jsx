import React from 'react'
import {Link} from 'react-router-dom'

export const Footer = () => {
  return (
        <div className="bg-slate-200 rounded-lg shadow m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 ChigwellEstae  All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <Link to="/">
                    <li className="hover:underline me-4 md:me-6">
                        Home
                    </li>
                </Link>
                <Link to='/about'>
                    <li className="hover:underline me-4 md:me-6">
                        About
                    </li>
                </Link>
                
                <Link to='/profile'>
                    <li className="hover:underline me-4 md:me-6">
                        Contact
                    </li>
                </Link>
            </ul>
            </div>
        </div>

  )
}
