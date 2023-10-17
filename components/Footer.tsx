// Import various constants and components from modules and libraries.
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define a functional component called 'Footer'.
const Footer = () => {
  return (
    // Render the footer section with various nested elements and CSS classes for styling.
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link
            href="/"
            className="mb-10">
            {/* Render a link with a logo image. */}
            <Image
              src='/logoO.png'
              alt="Logo"
              width={95}
              height={30} />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              // Render a footer column with a title and a list of links.
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    // Render links for the footer links.
                    <Link
                      href="/"
                      key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  // Render links for the footer contact info.
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    // Render links with social media icons.
                    <Link
                      href="/"
                      key={link}>
                      <Image
                        src={link}
                        alt="logo"
                        width={28}
                        height={28} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        {/* Render a border and a copyright notice. */}
        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2023 Odyssey | All rights reserved
        </p>
      </div>
    </footer>
  )
}

// Define a type called 'FooterColumnProps' to specify the expected properties for footer columns.
type FooterColumnProps = {
  title: string; // Title for the footer column.
  children: React.ReactNode; // Child elements within the footer column.
}

// Define a functional component called 'FooterColumn' for rendering footer columns.
const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">
        {title}
      </h4>
      {children}
    </div>
  )
}

// Export the 'Footer' component as the default export for this module.
export default Footer;
