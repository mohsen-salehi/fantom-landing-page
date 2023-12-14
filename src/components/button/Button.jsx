import Image from "next/image";
import Link from "next/link";

const Button = ({content, className}) => {
    return (
        <Link
            href={'/'}
            passHref={true}
            className={`${className} justify-between flex items-center text-sm rounded bg-stone-800  gradient-border mb-2 lg:mb-0 capitalize`}>
            {content}
            <Image
                src="/arrow-right-up.svg"
                alt="arrow"
                className="mx-2"
                width={14}
                height={14}
            />
        </Link>
    );
};

export default Button;