"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPage = usePathname();

  const navItems = [
    { text: "home", route: "/" },
    { text: "swap", route: "/swap" },
    { text: "liquidity", route: "/liquidity" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
      <>
        {/* Mobile Sidebar Version */}
        {/*<div className="lg:hidden">*/}
        {/*  /!* Hamburger Menu Icon *!/*/}
        {/*  <button*/}
        {/*      onClick={toggleMobileMenu}*/}
        {/*      className="text-white focus:outline-none p-2"*/}
        {/*  >*/}
        {/*    ☰*/}
        {/*  </button>*/}

        {/*  /!* Mobile Sidebar *!/*/}
        {/*  <nav*/}
        {/*      className={`${*/}
        {/*          isMobileMenuOpen ? "block" : "hidden"*/}
        {/*      } fixed inset-0 bg-black-800 bg-opacity-75 z-50 backdrop-blur-md`}*/}
        {/*  >*/}
        {/*    <div className="flex justify-end p-4">*/}
        {/*      <button*/}
        {/*          onClick={toggleMobileMenu}*/}
        {/*          className="text-white focus:outline-none"*/}
        {/*      >*/}
        {/*        X*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*    <ul className="flex flex-col items-center">*/}
        {/*      /!*{navItems.map((item) => (*!/*/}
        {/*      /!*    <li*!/*/}
        {/*      /!*        key={item.route}*!/*/}
        {/*      /!*        className={`${*!/*/}
        {/*      /!*            currentPage === item.route*!/*/}
        {/*      /!*                ? "text-white font-slashed-zero font-inter font-medium text-base leading-8 tracking-wider uppercase"*!/*/}
        {/*      /!*                : "text-gray-500 font-slashed-zero font-inter font-medium text-base leading-8 tracking-wider uppercase"*!/*/}
        {/*      /!*        } py-2`}*!/*/}
        {/*      /!*    >*!/*/}
        {/*      /!*      <Link href={item.route}>{item.text}</Link>*!/*/}
        {/*      /!*    </li>*!/*/}
        {/*      /!*))}*!/*/}
        {/*      /!* Include Launch Dapp button in mobile version *!/*/}
        {/*      <button className="bg-success hover:bg-blue-700 text-white font-normal rounded-0 my-2">*/}
        {/*        <Link*/}
        {/*            href="/"*/}
        {/*            className="text-white font-normal py-2 px-4 rounded font-roboto-condensed text-base leading-9 capitalize"*/}
        {/*        >*/}
        {/*          Launch Dapp*/}
        {/*        </Link>*/}
        {/*      </button>*/}
        {/*    </ul>*/}
        {/*  </nav>*/}
        {/*</div>*/}

        {/* Desktop Navbar Version */}
        <div className="sticky top-0 z-10">
          <header className="header backdrop-blur bg-transparent flex items-center justify-between lg:px-8 px-2 py-02">
            <h1 className="w-6/12 py-1">
              <Link href="/">
                  <Image
                      src="/logo-600x600.png"
                      className="w-10 md:w-50"
                      width={50}
                      height={50}
                      alt="FTM Swap logo"
                  />
              </Link>
            </h1>

            {/*<nav className="flex items-center justify-between px-4 py-3 bg-transparent text-white">*/}
            {/*  /!* Navbar items *!/*/}
            {/*  <ul className="flex space-x-4 items-center mx-12">*/}
            {/*    {navItems.map((item) => (*/}
            {/*        <li*/}
            {/*            key={item.route}*/}
            {/*            className={`${*/}
            {/*                currentPage === item.route*/}
            {/*                    ? "text-white font-slashed-zero font-inter font-medium text-base leading-8 tracking-wider uppercase"*/}
            {/*                    : "text-gray-500 font-slashed-zero font-inter font-medium text-base leading-8 tracking-wider uppercase"*/}
            {/*            }`}*/}
            {/*        >*/}
            {/*          <Link href={item.route}>{item.text}</Link>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*  </ul>*/}
            {/*</nav>*/}

            <div className="">
              <button className="bg-success hover:bg-blue-700 text-white font-normal rounded-0">
                <Link
                    href="https://dapp.ftmswap.com"
                    className="text-white font-normal py-2 px-4 rounded font-roboto-condensed text-base leading-9"
                >
                  Launch dApp
                </Link>
              </button>
            </div>
          </header>
        </div>
      </>
  );
};

export default Navbar;

