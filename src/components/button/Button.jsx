import Image from "next/image";
import Link from "next/link";

const Button = ({content, className}) => {
    return (
        <Link
            href={'/'}
            passHref={true}
            className={`${className} group justify-between flex items-center text-sm rounded bg-stone-800 gradient-border mb-2 lg:mb-0 capitalize font-inter font-normal leading-[157.33%]`}>
            {content}
            <Image
                src="/arrow-right-up.svg"
                alt="arrow"
                className="mx-2 group-hover:translate-x-2 duration-100 group-hover:-translate-y-2"
                width={14}
                height={14}
            />
        </Link>
    );
};

export default Button;