import Link from "next/link";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const links = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Features",
      href: "/features",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="w-screen h-32 bg-bg flex flex-row items-center justify-center px-10">
      <div className="flex flex-col h-full items-center justify-center md:flex-row md:justify-between border-t border-t-white/10 w-full">
        <p className="text-white/50 font-sup-reg text-sm">
          © 2024 Prismate. All rights reserved.
        </p>

        <div className="flex flex-row items-center justify-center space-x-5">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white font-sup-reg text-sm hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
