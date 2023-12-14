import TitleContent from "@/components/TitleContent";
import Image from "next/image";
import React from "react";

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
                <div className="lg:w-[648px] w-full bg-[url('/background-1.svg')] bg-no-repeat h-[319px]">
                    <div className="w-full h-full bg-[url('/iconsImage-1.svg')] bg-no-repeat">
                        <div className="text-white p-10">
                            <span className="text-4xl font-bold">30000.000 FTM</span>
                            <br/>
                            <p className="flex">
                                CHECK HERE
                                <Image
                                    src="/arrow-right-up.svg"
                                    alt="arrow"
                                    className=""
                                    width={18}
                                    height={18}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Treasury;
