import classNames from "classnames";
import Link from "next/link";
import { type ReactNode, useState } from "react";
import Close from "../icons/Close";
import Menu from "../icons/Menu";

type NavItemProps = {
  href: string;
  children: ReactNode;
};

const NavLogo = () => (
  <Link
    href="/"
    className="group focus-visible:italic focus-visible:outline-none"
  >
    <span className="group-hover:underline">s18.dev</span>&nbsp;
    <span className="group-hover:animate-blink">█</span>
  </Link>
);

const NavItem = ({ href, children }: NavItemProps) => (
  <Link
    href={href}
    className="hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black focus-visible:outline-none"
  >
    {children}
  </Link>
);

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex h-24 w-full items-center justify-between border-b border-white p-6 sm:space-x-8">
      <NavLogo />
      <button
        role="button"
        className="focus-visible:bg-white focus-visible:text-black focus-visible:outline-none sm:hidden"
        onClick={(e) => {
          e.preventDefault();
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        {isMenuOpen ? (
          <>
            <Close className="w-12" aria-hidden />
            <span className="sr-only">Close menu</span>
          </>
        ) : (
          <>
            <Menu className="w-12" aria-hidden />
            <span className="sr-only">Open menu</span>
          </>
        )}
      </button>
      <nav
        className={classNames(
          "pointer-events-none absolute inset-x-0 top-24 bottom-0 flex h-[calc(100dvh-6rem)] w-full flex-col items-center justify-center space-y-16 bg-black lowercase opacity-0 transition duration-300",
          "sm:pointer-events-auto sm:relative sm:inset-auto sm:h-auto sm:w-auto sm:flex-row sm:justify-start sm:space-x-8 sm:space-y-0 sm:bg-transparent sm:opacity-100 sm:transition-none",
          {
            "pointer-events-auto opacity-100": isMenuOpen,
          }
        )}
      >
        <NavItem href="/portfolio">Portfolio</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </nav>
    </div>
  );
};

export default Nav;
