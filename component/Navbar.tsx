
"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./button";
import { IoChevronDown } from "react-icons/io5";
import Logo from "@/assets/logo.webp";
import Image from "next/image";

const menuData = [
  { name: "Home", link: "/" },

  {
    name: "Program",
    submenu: [
      { name: "Program 1", link: "/program1" },
      { name: "Program 2", link: "/program2" },
      { name: "Program 3", link: "/program3" },
      { name: "Program 4", link: "/program4" },
    ],
  },

  {
    name: "About Us",
    submenu: [
      { name: "Our Mission", link: "/mission" },
      { name: "FAQs", link: "/faqs" },
    ],
  },

  { name: "Four Clouds Model", link: "/four-clouds" },
  { name: "Blogs", link: "/blogs" },
  { name: "Resource", link: "/resource" },
  { name: "Contact", link: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-2xl  border-b fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="logo"
            className="h-10 md:h-11 xl:h-12 2xl:h-13  w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-stretch gap-4 xl:gap-8 2xl:gap-6 z-0">
          {menuData.map((item) => (
            <li
              key={item.name}
              className="relative "
              onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
              onMouseLeave={() => item.submenu && setOpenDropdown(null)}
            >
              {item.submenu ? (
                <>
                  <button className="header-menu-font flex items-center gap-x-1 ">
                    {item.name}
                    <IoChevronDown />
                  </button>

                  {/* Desktop Dropdown */}
                  {openDropdown === item.name && (
                    <div className="absolute left-0 top-full pt-2 ">
                      <ul className="bg-primary rounded-lg shadow-lg min-w-[250px] my-2 overflow-hidden border border-primary">
                        {item.submenu.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.link}
                              className="block px-4 py-2 header-submenu-font hover:bg-gray-100/10 backdrop-blur-sm text-neutral-100 hover:text-white "
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.link ?? "#"} className="header-menu-font flex items-center">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3">
          <Button text="Enroll Now" className="header-menu-button px-[12px]" href="#" />
          <Button text="GET 1:1 COACHING" variant="outlinePrimary" className="header-menu-button px-[12px]" />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white/40 backdrop-blur-3xl">
          <ul className="flex flex-col p-4 gap-3">

            {menuData.map((item) => (
              <li key={item.name}>

                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="header-menu-font w-full text-left flex justify-between items-center"
                    >
                      {item.name}
                      <IoChevronDown
                        className={`transition-transform ${openDropdown === item.name ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {openDropdown === item.name && (
                      <ul className="pl-4 mt-2 flex flex-col gap-2">
                        {item.submenu.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.link}
                              className="header-submenu-font"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.link ?? "#"} className="header-menu-font">
                    {item.name}
                  </Link>
                )}

              </li>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 pt-4">
              <Button text="Enroll Now" variant="primary" className="header-menu-button px-[12px] min-w-[160px]" href="#"/>
              <Button text="GET 1:1 COACHING" variant="outlinePrimary" className="header-menu-button px-[12px] min-w-[160px]" />
            </div>

          </ul>
        </div>
      )}
    </nav>
  );
}