import Image from "next/image";

const FTMSwapHeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Centered Fantom Text with Wave Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/fantom.svg"
          className="w-52 md:w-full lg:w-auto wave-effect"
          width={200}
          height={200}
          alt="fantom text"
        />
      </div>

      {/* Vintage Floor Background with Reduced Opacity */}
      <div className="w-full h-full absolute bg-no-repeat bg-center -z-10">
        <Image
          src="/floor.svg"
          className="object-cover opacity-30"
          layout="fill"
          alt="chart bg"
        />
      </div>

      <div className="absolute bottom-20 left-4 transform">
        <article className="flex flex-col gap-[19px]">
          <div className="flex flex-row md:flex-row md:gap-x-2">
            <Image
              src="/rightArrow.svg"
              className="w-10 md:w-50"
              width={50}
              height={50}
              alt="right arrow"
            />
            <p className="text-white font-inter text-2xl md:text-5xl font-normal leading-normal">
              FTM SWAP V3&nbsp;
              {/* <span className="text-white font-inter text-2xl md:text-5xl font-extrabold leading-normal">
                PROTOCOL
              </span> */}
            </p>
          </div>
          <div>
            <p className="text-white font-roboto-condensed text-base md:text-xl font-normal leading-normal max-w-2xl">
                Introducing FTMSwap - the decentralized exchange on Fantom Sonic Network. Trade assets in less than 1 second with lightning-fast speed and ultra-low fees. Unleash the power of decentralized trading today!
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default FTMSwapHeroSection;
