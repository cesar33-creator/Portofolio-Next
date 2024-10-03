import React from 'react';


const Footer = () => {
return (
    <footer className="bg-black border-t border-gray-700 text-white">
    <div className="container mx-auto py-2 flex justify-center items-center">
        {/* <nav>
        <ul className="flex space-x-4">
            <li>
            <a href="/" className="text-gray-400 hover:text-white">
                Home
            </a>
            </li>
            <li>
            <a href="/about" className="text-gray-400 hover:text-white">
                About
            </a>
            </li>
            <li>
            <a href="/project" className="text-gray-400 hover:text-white">
                Project
            </a>
            </li>
            <li>
            <a href="/contact" className="text-gray-400 hover:text-white">
                Contact
            </a>
            </li>
        </ul>
        </nav> */}
    </div>

    <div className="container mx-auto py-12 flex justify-center items-center">
        <p className="text-sm text-center">
        Created By{' '}
        <a href="https://www.instagram.com/cesarrraa/" className="text-primary-500 hover:underline">
            Cesar Rais Akhtar.
        </a>{' '}
        | &copy; 2024.
        </p>
    </div>
    </footer>
);
};

export default Footer;
