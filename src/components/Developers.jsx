import React from 'react';
import Image from "next/image";

function Developers() {
    return (
        <section className="w-full my-20 text-white flex p-2 flex-wrap">
            <div className="w-full flex items-center p-5 text-xl">
                <Image
                    src="/rightArrow.svg"
                    width={20}
                    height={20}
                    alt="right arrow"
                />
                <h3>DEVELOPERS</h3>
            </div>
            <div className="w-full flex p-5 h-[560px] flex-wrap">
                <div className="w-3/5 flex flex-wrap h-full ">
                    <div className="w-full h-[450px] border bg-[url('/background-developer.svg')]"></div>
                    <div className="w-full h-[70px] justify-between items-end pt-2 flex flex-wrap ">
                        <button className="w-[48%] p-3 flex border items-center justify-between ">
                            V3 Whitepaper
                            <Image src={"/arrow-right-up.svg"} alt={"arrow"} width={14} height={14}/>
                        </button>
                        <button className="w-[48%] p-3 border flex items-center justify-between ">
                            Github
                            <Image src={"/arrow-right-up.svg"} alt={"arrow"} width={14} height={14}/>
                        </button>
                    </div>
                </div>
                <div className="w-2/5 ps-3 h-full">
                    <div className="border h-full p-6 flex content-around flex-wrap w-full">
                        <figure className="w-full flex">
                            <Image src={"/image20.svg"} alt={"icon"} width={210} height={202}/>
                        </figure>
                        <div className="w-full text-xl flex flex-wrap py-3">
                            Apply for funding from the
                            <br/>
                            Uniswap Grants Program
                        </div>
                        <div className="w-full text-gray-500">
                            Get paid to build the future of finance. <br/>
                            Uniswap Governance offers grant <br/>
                            funding for people building apps, tools, <br/>
                            and activities on the Uniswap Protocol.
                        </div>
                        <div className="w-full flex flex-wrap my-2">
                            <button className="p-2 w-auto flex items-center text-sm  rounded bg-stone-800 border border-rgba">
                                Learn More
                                <Image src={"/arrow-right-up.svg"} alt={"arrow"} className="mx-2" width={14} height={14}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Developers;