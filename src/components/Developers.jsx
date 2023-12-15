import Image from "next/image";
import Link from "next/link";
import TitleContent from "@/components/TitleContent";
import Button from "@/components/button/Button";

function Developers() {
    return (
        <section className="w-full my-20 text-white flex p-2 flex-wrap">
            <TitleContent title="developers"/>
            <div className="w-full flex p-5 flex-col-reverse lg:flex-row lg:h-[560px]">
                <div className="lg:w-3/5 flex flex-wrap h-full">
                    <div
                        className="w-full h-[450px] relative gradient-border mb-4 lg:mb-0 bg-[url('/background-developer.svg')] bg-center bg-opacity-25 bg-no-repeat bg-cover"
                    >

                        <article className="absolute bottom-0 flex flex-col gap-[21px] pl-10 px-10 pb-7">
                            <h3 className="text-white font-inter text-lg font-medium leading-[133.125%]">Superpowers for
                                DeFi developers.</h3>
                            <span className="text-gray-400 font-inter text-base font-normal leading-[157.33%]">Build Defi apps and tools on the largest crypto project on <br/> Ethereum. Get started with quick start guides, protocol <br/> documentation, a Javascript SDK, and fully open source code.</span>

                            <div className="w-full flex flex-wrap my-2 mt-4">
                                <Button className='w-full p-2 lg:w-auto' content="documentation"/>
                            </div>
                        </article>
                    </div>

                    <div className="w-full justify-between items-end pt-2 flex flex-wrap mb-4 lg:mb-0 gap-3 lg:gap-0">
                        <Link
                            href="/"
                            className="w-full lg:w-[48%] p-3 flex border items-center justify-between "
                        >
                            FTM Swap Whitepaper
                            <Image
                                src="/arrow-right-up.svg"
                                alt="arrow"
                                width={14}
                                height={14}
                            />
                        </Link>

                        <Link
                            href="https://github.com/ftmswap"
                            className="w-full lg:w-[48%] p-3 border flex items-center justify-between"
                        >
                            Github
                            <Image
                                src="/arrow-right-up.svg"
                                alt="arrow"
                                width={14}
                                height={14}
                            />
                        </Link>
                    </div>
                </div>
                <div className="lg:w-2/5 lg:ps-3 mb-4 lg:mb-0 h-full">
                    <div className="border h-full p-6 flex justify-between content-around flex-col">
                        <figure className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                            <Image src="/image20.svg" alt="icon" width={210} height={202}/>
                        </figure>
                        <div className="w-full text-center lg:text-left">
                            <h1 className="w-full py-3 text-white font-inter text-xl font-medium leading-[133.125%]">
                                FTMSwap Token (FTMS)
                            </h1>

                            <div className="w-full text-gray-400 font-inter text-base font-normal leading-[157.33%]">
                                Through the FTMSwap token, the team aims to foster growth within the FTMSwap ecosystem. A 6% transaction fee applies to FTMS tokens, where 3% is allocated to enhance FTMS liquidity, and the remaining 3% contributes to the FTMSwap treasury. These funds will be strategically utilized for campaigns, development initiatives, or impactful endeavors, ensuring a dynamic and sustainable expansion of the FTMSwap platform.
                            </div>
                            <div className="w-full flex flex-wrap my-2 mt-4">
                                <Button className='w-full p-2 lg:w-auto' content="learn more"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Developers;
