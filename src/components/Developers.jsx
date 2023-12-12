import Image from "next/image";
import Link from "next/link";

function Developers() {
  return (
    <section className="w-full my-20 text-white flex p-2 flex-wrap">
      <div className="w-full flex items-center p-5 text-xl">
        <Image src="/rightArrow.svg" width={20} height={20} alt="right arrow" />
        <h3>DEVELOPERS</h3>
      </div>
      <div className="w-full flex p-5 flex-col-reverse lg:flex-row lg:h-[560px]">
        <div className="lg:w-3/5 flex flex-wrap h-full">
          <div
            className="w-full h-[450px] border bg-cover bg-center mb-4 lg:mb-0"
            style={{ backgroundImage: "url('/background-developer.svg')" }}
          ></div>

          <div className="w-full justify-between items-end pt-2 flex flex-wrap mb-4 lg:mb-0 gap-3 lg:gap-0">
            <Link
              href="/"
              className="w-full lg:w-[48%] p-3 flex border items-center justify-between "
            >
              V3 Whitepaper
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
          <div className="border h-full p-6 flex content-around flex-col">
            <figure className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <Image src="/image20.svg" alt="icon" width={210} height={202} />
            </figure>
            <div className="w-full text-center lg:text-left">
              <div className="w-full text-xl flex flex-wrap py-3">
                Apply for funding from the Uniswap Grants Program
              </div>
              <div className="w-full text-gray-500">
                Get paid to build the future of finance. <br />
                Uniswap Governance offers grant funding for people building
                apps, tools, and activities on the Uniswap Protocol.
              </div>
              <div className="w-full flex flex-wrap my-2">
                <button className="p-2 w-full lg:w-auto flex items-center text-sm rounded bg-stone-800 border border-rgba mb-2 lg:mb-0">
                  Learn More
                  <Image
                    src="/arrow-right-up.svg"
                    alt="arrow"
                    className="mx-2"
                    width={14}
                    height={14}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Developers;
