import Image from "next/image";

const TitleContent = ({title}) => {
    return (
        <div className="w-full flex flex-row gap-[10px] items-center text-xl p-5 pb-0">
            <Image
                loading='lazy'
                src="/rightArrow.svg"
                width={20}
                height={20}
                alt="right arrow"
            />
            <h1 className="text-white font-inter text-xl font-normal uppercase">{title}</h1>
        </div>
    );
};

export default TitleContent;