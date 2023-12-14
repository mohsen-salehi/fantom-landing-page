import React from 'react';
import Image from "next/image";
import TitleContent from "@/components/TitleContent";
import Button from "@/components/button/Button";

function Governance() {
    return (
        <section className="w-full my-20 text-white flex p-2 flex-wrap">
            <TitleContent title="PROTOCOL GOVERNANCE"/>
            <div className="w-full flex justify-between flex-wrap p-5 mt-2 ">
                <div
                    className="w-[55%] h-[454px] bg-center bg-opacity-25 bg-no-repeat bg-cover  bg-[url('/bg-with-effect.svg')] gradient-border">
                    <div className="w-full p-8 h-full bg-stone-800 bg-opacity-25 backdrop-blur-[1px]">
                        <div className="w-full p-2 flex flex-wrap">
                            <h3 className='text-white text-3xl'>
                                Governed by the community.
                            </h3>
                            <div className="w-full my-5 text-xl text-gray-400">
                                The Uniswap Protocol is managed by a global community of <br/>
                                UNI token holders and delegates.
                            </div>


                            <Button className='w-52 p-3' content="learn more"/>
                        </div>
                    </div>
                </div>
                <div className="w-[44%] flex flex-wrap content-between items-center">
                    <div className="border p-3 py-5 w-full flex flex-wrap">
                        <h3 className="text-2xl me-1">Governance Forum</h3>
                        <Image
                            src="/arrow-right-up.svg"
                            alt="arrow"
                            className="mx-2"
                            width={18}
                            height={18}
                        />
                        <div className="w-full text-gray-300 mt-2">
                            Participate by proposing upgrades and discussing the future of the <br/> protocol with the
                            Uniswap community.
                        </div>
                    </div>
                    <div className="border p-3 py-5 w-full flex flex-wrap">
                        <h3 className="text-2xl me-1">Sybil</h3>
                        <Image
                            src="/arrow-right-up.svg"
                            alt="arrow"
                            className="mx-2"
                            width={18}
                            height={18}
                        />
                        <div className="w-full text-gray-300 mt-2">
                            Vote on offchain proposals with the Snapshot interface. <br/> Votes are weighted by the
                            number of UNI delegates.
                        </div>
                    </div>
                    <div className="border p-3 py-5 w-full flex flex-wrap">
                        <h3 className="text-2xl me-1">Governance Portal</h3>
                        <Image
                            src="/arrow-right-up.svg"
                            alt="arrow"
                            className="mx-2"
                            width={18}
                            height={18}
                        />
                        <div className="w-full text-gray-300 mt-2">
                            Vote on official Uniswap governance proposals and <br/> view past proposals.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Governance;