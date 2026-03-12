import Link from "next/link";
import { FiUser, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp
} from "react-icons/fa";
import Logo from "@/assets/logo-white.webp";
import Image from "next/image";

const quickLinks = [
  { name: "Home", link: "/" },
  { name: "Blogs", link: "/blogs" },
  { name: "Contact", link: "/contact" },
  { name: "Privacy Policy", link: "/privacy-policy" },
];

const usefulLinks = [
  { name: "Our Mission, Vision & Core Values", link: "/mission" },
  { name: "Who is Arslan Larik?", link: "/arslan-larik" },
  { name: "Who is Bismillah?", link: "/bismillah" },
  { name: "Why Train With AL&CO?", link: "/why-train" },
];

const ContactDetails = [
  { icon: <FiUser />, name: "Who is Arslan Larik?" },
  { icon: <FiMail />, name: "connect@arslanlarik.com" },
  { icon: <FiMapPin />, name: "D-86/1, Block-7, Gulshan-e-iqbal, Karachi Sindh, Pakistan." },

];
const socialLinks = [
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaYoutube />, link: "#" },
  { icon: <FaLinkedinIn />, link: "#" },
  { icon: <FaWhatsapp />, link: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-dark-primary-to-light bg-top-left bg-cover w-full">

      <div className="container mx-auto px-4 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="logo"
                className="h-10 md:h-11 xl:h-12 2xl:h-20  w-auto"
                priority
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading-font mb-4 text-white">Quick Links</h3>

            <ul className="footer-menu-font text-white space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="footer-heading-font mb-4 text-white">Useful Links</h3>

            <ul className="footer-menu-font text-white space-y-2">
              {usefulLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="footer-heading-font mb-4 text-white">Contact Details</h3>

            <ul className="footer-menu-font text-white space-y-2">
              {ContactDetails.map((item, index) => (
                <li key={index} className="flex gap-2 ">
                  <div className="h-4 w-4  mt-1">{item.icon}</div>
                  <div className="">
                    {item.name}
                  </div>
                </li>
              ))}

            </ul>
          </div>

        </div>

        <hr className="my-6 border-default sm:mx-auto lg:my-8" />

        {/* Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="footer-menu-font text-white sm:text-center">
            © 2025 Vistar Media. All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:mt-0 sm:justify-center gap-3">
            {socialLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 hover:-translate-y-1 hover:opacity-90"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

      </div>

    </footer>
  );
}