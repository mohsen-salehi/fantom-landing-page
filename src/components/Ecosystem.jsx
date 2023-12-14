import Image from "next/image";

function Ecosystem() {
  return (
    <section className="w-full flex my-20 p-2 flex-wrap">
      <div className="lg:w-1/2 text-white flex content-center p-5 flex-wrap">
        <div className="w-full flex items-center text-xl">
          <Image
            src="/rightArrow.svg"
            width={20}
            height={20}
            alt="right arrow"
          />
          <h1>UNISWAP ECOSYSTEM</h1>
        </div>
        <div className="w-full my-2 font-[600] flex flex-wrap text-2xl ">
          A growing network of
          <br />
          DeFi Apps.
        </div>
        <p>
          Developers, traders, and liquidity providers <br /> participate
          together in a financial marketplace <br /> that is open and accessible
          to all.
        </p>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center p-5">
        <div className="lg:w-[648px] w-full bg-[url('/background-1.svg')] relative h-[319px]">
          <div className="bg-rgba w-full flex justify-center items-center backdrop-blur-2xl h-full absolute">
            <div className="w-full flex ps-[20%] flex-wrap">
              <h3 className="text-5xl text-white w-full font-bold">9000.00 $FTM</h3>
              <div className="flex flex-wrap mt-3 items-center w-full">
                <span className="text-white "> CHECK HERE </span>
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
