import Link from "next/link";
import { MenuIcon, XIcon } from "./Icons";
import { useState } from "react";

export const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Guestbook", href: "/guestbook" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div>
        <div
          id="navigation"
          className="z-50 fixed top-3 left-[50%] translate-x-[-50%] max-w-[672px] w-full h-[50px] px-5 bg-[#2ec4b6]/10 backdrop-blur-sm rounded-xl"
        >
          <div className="w-full h-full flex items-center justify-between">
            <Link href={`/`} className="text-2xl text-[#ff3366] font-semibold">
              dev
            </Link>

            <div className="flex gap-5 items-center justify-end">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  className="hidden sm:flex text-lg hover:text-[#20a4f3]"
                >
                  {link.label}
                </Link>
              ))}
              <span className="sm:hidden w-7 h-7 hover:text-[#20a4f3]">
                {menuOpen ? (
                  <XIcon onClick={closeMenu} />
                ) : (
                  <MenuIcon onClick={openMenu} />
                )}
              </span>
            </div>
          </div>
        </div>

        <div
          id="menu"
          className={`z-50 sm:hidden fixed bottom-0 left-0 bg-[#2ec4b6]/10 backdrop-blur-sm rounded-2xl w-full ease-out duration-300 ${
            menuOpen ? "h-fit" : "h-0"
          }`}
        >
          <div className="flex flex-col items-center space-y-4 py-6 border-t border-slate-100/70 rounded-2xl">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="text-xl font-semibold hover:text-[#20a4f3]"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
