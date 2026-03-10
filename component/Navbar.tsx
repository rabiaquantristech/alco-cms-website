// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="bg-gray-800 text-white p-4">
//       <ul className="flex space-x-4">
//         <li><Link href="/">Home</Link></li>
//         <li><Link href="/about">About</Link></li>
//         <li><Link href="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }
"use client";

import Link from "next/link";
import { useState } from "react";
import { FiCheck, FiTrash2 } from "react-icons/fi"; // React Icons library
import Button from "./button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b fixed w-full top-0 z-20 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7"
            alt="Logo"
          />
          <span className="text-xl font-semibold">ALCO</span>
        </Link>

        {/* Right Buttons */}
        <div className="flex md:order-2 space-x-3">
          <Button
            text="Both Icons"
            variant="primary"
          />
          {/* <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm px-4 py-2">
            Get Started
          </button> */}

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 w-9 h-9 flex items-center justify-center"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${open ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium p-4 md:p-0 mt-4 md:mt-0">
            <li>
              <Link href="/" className="block py-2 px-3 text-blue-600">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="block py-2 px-3 hover:text-blue-600">
                About
              </Link>
            </li>

            <li>
              <Link href="/services" className="block py-2 px-3 hover:text-blue-600">
                Services
              </Link>
            </li>

            <li>
              <Link href="/contact" className="block py-2 px-3 hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}