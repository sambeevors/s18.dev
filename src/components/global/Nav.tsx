import Link from "next/link";

const NavLogo = () => (
  <Link
    href="/"
    className="group focus-visible:italic focus-visible:outline-none"
  >
    <span className="group-hover:underline">s18.dev</span>&nbsp;
    <span className="group-hover:animate-blink">█</span>
  </Link>
);

const Nav = () => (
  <div className="sticky top-0 z-50 flex h-24 w-full items-center justify-between border-b border-white bg-black p-6 sm:space-x-8">
    <NavLogo />
  </div>
);

export default Nav;
