import React from 'react';
import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <footer className="w-full flex p-5 flex-wrap items-center justify-between">
            <ul className="w-3/6 flex  text-white justify-between p-4">
                <li>Ecosystem</li>
                <li>Community</li>
                <li>Governance</li>
                <li>Blog</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>Trademark Policy</li>
                <li>Security</li>
            </ul>
            <div className="w-2/6 border"></div>
            <div className="w-1/6 flex flex-wrap items-center  px-10 p-3">
                <div className="w-full flex items-center  justify-around">
                    <Link passHref={true} href='https://t.me/FTMSwap'> <Image src={"/telegram.svg"} alt={"telegram"} width={20} height={20}/></Link>
                    <Link passHref={true} href='https://github.com/ftmswap'><Image src={"/github_fill.svg"} alt={"github"} width={20} height={20}/></Link>
                    <Link passHref={true} href='https://x.com/FTMSwap'><Image src={"/twitter_fill.svg"} alt={"twitter"} width={20} height={20}/></Link>
                </div>
                <div className="w-full text-white mt-3">
                    Designed by <Link passHref={true} href='https://nilldevelopers.com/' className="text-success font-black">NILL</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;