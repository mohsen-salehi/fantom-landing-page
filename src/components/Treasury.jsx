import TitleContent from "@/components/TitleContent";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function Treasury() {
    return (
        <section className="w-full flex my-20 p-2 flex-wrap">
            <div className="lg:w-1/2 text-white flex content-center flex-wrap">
                <TitleContent title="FTM SWAP TREASURY"/>
                <div className="p-5 pt-2">
                    <p className="text-white font-inter text-base font-normal leading-[157.33%]">
                        FTMSwap's team has emerged as a resilient survivor in the bear market. Now, you can witness the decentralization of our swap treasury. We utilize a portion of our FTM coin holdings to cover swap costs and deliver the best services to our valued users.
                        <br/>
                        We express our heartfelt gratitude for standing with us during the bear market. Together, we forge ahead, committed to providing an exceptional trading experience and building a robust decentralized ecosystem.
                    </p>
                </div>

            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center p-5">
                <div className="lg:w-[648px] w-full bg-[url('/background-1.svg')] relative h-[319px] border">
                    <div className="bg-rgba w-full flex justify-center items-center backdrop-blur-2xl h-full absolute">
                        <div className="w-full flex ps-[20%] flex-wrap">
                            <h3 className="text-5xl text-white w-full font-bold">9000.00 $FTM</h3>
                            <div className="flex flex-wrap mt-3 items-center w-full">
                                <Link href='/' className="text-white font-inter text-base font-normal leading-157"> CHECK HERE </Link>
                                <Image
                                    src="/arrow-right-up.svg"
                                    alt="arrow"
                                    className="mx-2"
                                    width={14}
                                    height={14}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full bg-[url('/iconsImage-1.svg')]"></div>
                </div>
            </div>
        </section>
    );
}

export default Treasury;
