import TitleContent from "@/components/TitleContent";
import Image from "next/image";

function Ecosystem() {
    return (
        <section className="w-full flex my-20 p-2 flex-wrap">
            <div className="lg:w-1/2 text-white flex content-center flex-wrap">
                <TitleContent title="FTM SWAP TREASURY"/>
                <div className="p-5">
                    <h3 className="w-full my-2 flex flex-wrap text-white font-inter text-2xl font-medium ">
                        A growing network of DeFi Apps.
                    </h3>
                    <p className="text-white font-inter text-base font-normal leading-[157.33%]">
                        Developers, traders, and liquidity providers participate
                        together in a financial marketplace that is open and accessible
                        to all.
                    </p>
                </div>

            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center p-5">
                <div className="lg:w-[648px] w-full bg-[url('/background-1.svg')] relative h-[319px]">
                    <div className="bg-rgba w-full flex justify-center items-center backdrop-blur h-full absolute">
                        <div className="w-full ps-[20%] mt-4 flex justify-center content-center flex-wrap">
                            <h3 className="text-5xl text-white w-full font-bold">9000.00 $FTM</h3>
                            <div className="flex flex-wrap w-full">
                                <span className="text-white"> CHECK HERE </span>
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

export default Ecosystem;

