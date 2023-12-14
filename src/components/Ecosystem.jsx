import TitleContent from "@/components/TitleContent";

function Ecosystem() {
    return (
        <section className="w-full flex my-20 p-2 flex-wrap">
            <div className="lg:w-1/2 text-white flex content-center flex-wrap">
                <TitleContent title="FTM SWAP TREASURY"/>
                <div className="p-5">
                    <div className="w-full my-2 flex flex-wrap text-white font-inter text-2xl font-medium ">

                        A growing network of
                        <br/>
                        DeFi Apps.
                    </div>
                    <p className="text-white font-inter text-base font-normal leading-[157.33%]">
                        Developers, traders, and liquidity providers <br/> participate
                        together in a financial marketplace <br/> that is open and accessible
                        to all.
                    </p>
                </div>

            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center p-5">
                <div className="lg:w-[648px] w-full bg-[url('/background-1.svg')] bg-no-repeat h-[319px]">
                    <div className="w-full h-full bg-[url('/iconsImage-1.svg')] bg-no-repeat">
                        <div className="text-white p-10">
                            <span className="text-4xl font-bold">300+</span>
                            <br/>
                            Integrations
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ecosystem;
