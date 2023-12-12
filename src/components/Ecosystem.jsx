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
          <h3>UNISWAP ECOSYSTEM</h3>
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
        <div className="lg:w-[648px] w-full bg-[url('/background-1.svg')] h-[319px]">
          <div className="w-full h-full bg-[url('/iconsImage-1.svg')]">
            <div className="text-white p-10">
              <span className="text-4xl font-bold">300+</span>
              <br />
              Integrations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;
