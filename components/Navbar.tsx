// Importing constants and components
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

// Define a functional Navbar component
const Navbar = () => {
  return (
    // The main navigation bar with a logo, links, and a login button
    <nav className="z-30 py-5 relative max-container padding-container flexBetween">
      {/* Link to the home page with the logo */}
      <Link href='/'>
        <Image
          src='/logoO.png'
          alt='Logo'
          width={85}
          height={30}
        />
      </Link>

      {/* List of navigation links for larger screens (desktop) */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold flexCenter"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Login button for larger screens */}
      <div className="lg:flexCenter hidden">
        <Button
          type='button'
          title='Log In'
          icon='/user.svg'
          variant='btn_dark_green'
        />
      </div>

      {/* Hamburger menu icon for smaller screens (mobile) */}
      <Image
        src='menu.svg'
        alt='Menu'
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
}

// Export the Navbar component for use in other parts of the application
export default Navbar;
