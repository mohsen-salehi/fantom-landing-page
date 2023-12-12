import React from 'react';
import Image from "next/image";

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
                    <Image src={"/discord_fill.svg"} alt={"discord"} width={20} height={20} />
                    <Image src={"/github_fill.svg"} alt={"github"} width={20} height={20} />
                    <Image src={"/twitter_fill.svg"} alt={"twitter"} width={20} height={20} />
                </div>
                <div className="w-full text-white mt-3">
                    Designed by Pentagons
                </div>
            </div>
        </footer>
    );
}

export default Footer;