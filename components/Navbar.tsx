import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full px-6 py-4 lg:px-10 bg-dark-1">
      <Link href="/" className="flex items-center gap-1">
        <img
          src="/icons/logo.svg"
          alt="Zoom"
          width={34}
          height={34}
          className="max-sm:size-10"
        />
        <p className="text-[26px] text-white font-extrabold max-sm:hidden">
          ZOOM
        </p>
      </Link>
      <div className="flex-between  gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
