import React from 'react';
import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <footer className="w-full flex p-5 flex-wrap items-center justify-between">
            <div className="w-4.5/12 flex  text-white justify-between p-4">
                <div className="">
                    Feel free to reach out to us at <a href="mailto:support@ftmswap.com"> support@ftmswap.com</a>
                </div>
            </div>
            <div className="w-5/12 border"/>
            <div className="w-2.5/12 flex flex-wrap items-center  px-10 p-3">
                <div className="w-full flex items-center justify-around">
                    <Link passHref={true} href='https://t.me/FTMSwap'> <Image src={"/telegram.svg"} alt={"telegram"} width={20} height={20}/></Link>
                    <Link passHref={true} href='https://github.com/ftmswap'><Image src={"/github_fill.svg"} alt={"github"} width={20} height={20}/></Link>
                    <Link passHref={true} href='https://x.com/FTMSwap'><Image src={"/twitter_fill.svg"} alt={"twitter"} width={20} height={20}/></Link>
                </div>
                <div className="w-full text-white mt-3 text-center">
                    {/* !!! */}
                    © 2023 FTM Swap
                </div>
            </div>
        </footer>
    );
}

export default Footer;