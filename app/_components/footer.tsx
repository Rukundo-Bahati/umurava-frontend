import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#001A40] bg-[linear-gradient(#ffffff03_1px,transparent_1px),linear-gradient(90deg,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] text-white py-12 px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid gap-8 lg:grid-cols-2 items-center mb-6">
          {/* Footer Logo */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/footer.png"
              alt="Footer Logo"
              width={120}
              height={120}
              className="mx-auto lg:mx-0"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-end gap-4 flex-wrap">
            {["facebook", "google", "linkedin", "youtube"].map((platform) => (
              <Link
                key={platform}
                href="#"
                className="rounded-full overflow-hidden w-8 h-8"
              >
                <Image
                  src={`/images/${platform}.png`}
                  alt={platform}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-white/20 mb-8" />

        {/* Main Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Address Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Our Address</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span>Email: </span>
                <Link
                  href="mailto:career@tickets.com"
                  className="hover:text-white"
                >
                  career@tickets.com
                </Link>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span>Address: </span>
                <span>89 KG 14 Ave, Kigali</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span>Phone: </span>
                <Link href="tel:+250700000" className="hover:text-white">
                  +250700000
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2 text-sm text-gray-300">
              {["Home", "Program", "About", "Contact Us"].map((link) => (
                <Link key={link} href="#" className="block hover:text-white">
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">
              Join our newsletter to keep up to date with us!
            </h3>
            <div className="flex flex-col sm:flex-row items-center bg-white rounded-md">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow px-4 py-2 text-black placeholder:text-gray-400 border-none rounded-t-md sm:rounded-l-md sm:rounded-t-none w-full focus:outline-none focus:ring-0"
              />
              <button className="bg-blue-600 text-white px-4 py-2 w-full sm:w-auto rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="my-12 border-white/10" />

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 text-center md:text-left">
          <p>Copyright © All Rights Reserved SawaPay 2024</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
