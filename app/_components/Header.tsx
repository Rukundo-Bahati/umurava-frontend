"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, JSX } from "react";

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const NavigateToJoin = () => {
    router.push("/join");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Challenge & Hackathons", href: "/challenges" },
    { name: "For Educational Institutions", href: "/institutions" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];
  return (
    <header className="flex items-center justify-between px-6 py-4 sm:px-10  w-full z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={144}
          height={144}
          className="w-36 sm:w-40"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-6">
        {[
          { name: "Home", href: "/" },
          { name: "Challenge & Hackathons", href: "/challenges" },
          { name: "For Educational Institutions", href: "/institutions" },
          { name: "About Us", href: "/about" },
          { name: "Contact Us", href: "/contact" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-gray-600 hover:text-[#2B71F0] transition-all text-lg font-medium ${
              item.name === "Home" ? "text-[#2B71F0]" : "text-gray-500"
            } block font-light text-[15px]`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 text-lg rounded-md font-bold text-white border-2 border-[#041738] bg-[#041738] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
          onClick={NavigateToJoin}
        >
          Join the Program
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7"
            fill="#000"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        <div className="bg-white w-2/3 sm:w-1/2 h-full shadow-md p-6">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 320.591 320.591"
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
            </svg>
          </button>

          {/* Mobile Menu Links */}
          <ul className="mt-10 space-y-6">
            {[
              { name: "Home", href: "/" },
              { name: "Challenge & Hackathons", href: "/challenges" },
              { name: "For Educational Institutions", href: "/institutions" },
              { name: "About Us", href: "/about" },
              { name: "Contact Us", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block text-gray-700 text-lg font-medium hover:text-[#007bff] transition"
                  onClick={toggleMenu} // Close menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
