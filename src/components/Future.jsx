import React from 'react';
import Image from "next/image";
import TitleContent from "@/components/TitleContent";
import Button from "@/components/button/Button";

function Future() {
    return (
        <section className="w-full my-20 text-white flex p-2 flex-wrap">
            <TitleContent title="FTMSwap Future"/>
            <div className="w-full flex justify-between flex-wrap p-5 mt-2 pt-2">
                <div
                    className="w-[55%] h-[454px] bg-center bg-opacity-25 bg-no-repeat bg-cover border">
                    <div className="w-full p-8 h-full bg-opacity-25 backdrop-blur-[1px]">
                        <div className="w-full p-2 flex flex-wrap">
                            <h3 className='text-white text-3xl'>
                                What can we expect in the future?
                            </h3>
                            <div className="w-full my-5 text-xl text-gray-400">
                                The FTMSwap team is capable of developing anything in Web3. However, we value your input in improving our services. Your satisfaction is our top priority, and we are committed to providing the best experience for you.
                                <br/>
                                At FTMSwap, we don't just have investors or influencers, we have friends. We don't consider you as mere users; you are part of our supportive family. Rest assured, we will always have your back.
                                <br/>
                                We also want to express our gratitude for your support during Gitcoin v1. Your support has been invaluable, and we carry that appreciation with us as we continue to grow and evolve.
                            </div>

                            <Button className='w-52 p-3' content="Submit feedback"/>
                        </div>
                    </div>
                </div>
                <div className="w-[44%] flex flex-wrap content-between items-center">
                    <div className="border p-3 py-4 w-full flex flex-wrap">
                        <h3 className="text-2xl me-1">FTM Wallet</h3>
                        <Image
                            src="/arrow-right-up.svg"
                            alt="arrow"
                            className="mx-2"
                            width={18}
                            height={18}
                        />
                        <div className="w-full text-gray-300 mt-2">
                            Having a unique FTM wallet for Android and iOS is crucial in the Fantom Sonic Network ecosystem. We are dedicated to delivering a lightning-fast and innovative wallet solution to our community.
                        </div>
                    </div>
                    <div className="border p-2 py-4 w-full flex flex-wrap">
                        <h3 className="text-2xl me-1">launchpad</h3>
                        <Image
                            src="/arrow-right-up.svg"
                            alt="arrow"
                            className="mx-2"
                            width={18}
                            height={18}
                        />
                        <div className="w-full text-gray-300 mt-2">
                            The Launchpad feature holds immense potential to enhance liquidity on FTMSwap and attract a wider user base in the future. By utilizing the Launchpad, we can create opportunities for new projects to launch and flourish, contributing to the growth and vibrancy of our platform.
                        </div>
                    </div>
                    <div className="border p-3 py-4 w-full flex flex-wrap">
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

export default Future;