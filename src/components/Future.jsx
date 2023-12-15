import React from 'react';
import Image from "next/image";
import TitleContent from "@/components/TitleContent";
import Button from "@/components/button/Button";

function Governance() {
    return (
        <section className="w-full my-20 text-white flex p-2 flex-wrap">
            <TitleContent title="PROTOCOL GOVERNANCE"/>
            <div className="w-full flex justify-between flex-wrap p-5 mt-2 lg:gap-0 gap-[20px]">
                <div
                    className="lg:w-[55%] w-full h-auto bg-current gradient-border">
                    <div className="w-full p-8 h-full bg-stone-800 bg-opacity-25 backdrop-blur-[1px]">
                        <div className="w-full p-2 flex flex-wrap">
                            <h3 className='text-white text-3xl'>
                                What can we expect in the future?
                            </h3>
                            <div className="w-full my-5 text-xl text-gray-400">
                                The FTMSwap team is capable of developing anything in Web3. However, we value your input
                                in improving our services. Your satisfaction is our top priority, and we are committed
                                to providing the best experience for you.
                                <br/>
                                At FTMSwap, we don't just have investors or influencers, we have friends. We don't
                                consider you as mere users; you are part of our supportive family. Rest assured, we will
                                always have your back.
                                <br/>
                                We also want to express our gratitude for your support during Gitcoin v1.
                            </div>


                            <div className="flex flex-row flex-wrap gap-3">
                                <Button className='w-52 p-3' content="learn more"/>
                                <Button className='w-52 p-3' content="Submit feedback"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[44%] w-full flex flex-wrap content-between items-center lg:gap-0 gap-[20px]">
                    <div className="border p-3 py-5 w-full flex flex-wrap">
                        <h3 className="text-2xl me-1">FTM Wallet</h3>
                        <Image
                            src="/arrow-right-up.svg"
                            alt="arrow"
                            className="mx-2"
                            width={18}
                            height={18}
                        />
                        <div className="w-full text-gray-300 mt-2">
                            Having a unique FTM wallet for Android and iOS is crucial in the Fantom Sonic Network ecosystem. 
                        </div>
                    </div>
                    <div className="border p-3 py-5 w-full flex flex-wrap">
                        <h3 className="text-2xl me-1">launchpad</h3>
                        <Image
                            src="/arrow-right-up.svg"
                            alt="arrow"
                            className="mx-2"
                            width={18}
                            height={18}
                        />
                        <div className="w-full text-gray-300 mt-2">
                            The Launchpad feature holds immense potential to enhance liquidity on FTMSwap and attract a wider user base in the future. 
                        </div>
                    </div>
                    <div className="border p-3 py-5 w-full flex flex-wrap">
                        <h3 className="text-2xl me-1">Airdrop</h3>
                        <Image
                            src="/arrow-right-up.svg"
                            alt="arrow"
                            className="mx-2"
                            width={18}
                            height={18}
                        />
                        <div className="w-full text-gray-300 mt-2">
                            We are diligently preparing for an upcoming airdrop exclusive to the FTM Swap community in the near future.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Governance;