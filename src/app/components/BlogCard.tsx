import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
    return (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div>
                <div className="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                    <Image
                        src="/img/blog1.jpg"
                        width={500}
                        height={500}
                        alt="blog1"
                        className="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out"
                    />
                </div>

                <div>
                    <div className="flex items-center gap-5 py-5">
                        <p>20 August 2022</p>
                        <p>1 min read</p>
                    </div>

                    <Link
                        href="#blog"
                        className="text-2xl font-bold underline hover:text-color-secondary hover:no-underline"
                    >
                        Four ways to cheer yourself up on Blue Monday!
                    </Link>

                    <p className="leading-relaxed my-5">
                        On the second edition of Serious Business, Inc. editor
                        Jim Ledbetter and Fusion senior editor Salmon debate...
                    </p>

                    <a
                        href="#blog"
                        className="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out"
                    >
                        <span className="tracking-wider capitalize underline hover:no-underline">
                            Read more
                        </span>
                    </a>
                </div>
            </div>
            <div>
                <div className="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                    <Image
                        src="/img/blog2.jpg"
                        width={500}
                        height={500}
                        alt="blog1"
                        className="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out"
                    />
                </div>

                <div>
                    <div className="flex items-center gap-5 py-5">
                        <p>20 August 2022</p>
                        <p>1 min read</p>
                    </div>

                    <Link
                        href="#blog"
                        className="text-2xl font-bold underline hover:text-color-secondary hover:no-underline"
                    >
                        Four ways to cheer yourself up on Blue Monday!
                    </Link>

                    <p className="leading-relaxed my-5">
                        On the second edition of Serious Business, Inc. editor
                        Jim Ledbetter and Fusion senior editor Salmon debate...
                    </p>

                    <a
                        href="#blog"
                        className="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out"
                    >
                        <span className="tracking-wider capitalize underline hover:no-underline">
                            Read more
                        </span>
                    </a>
                </div>
            </div>
            <div>
                <div className="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                    <Image
                        src="/img/blog3.jpg"
                        width={500}
                        height={500}
                        alt="blog1"
                        className="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out"
                    />
                </div>

                <div>
                    <div className="flex items-center gap-5 py-5">
                        <p>20 August 2022</p>
                        <p>1 min read</p>
                    </div>

                    <Link
                        href="#blog"
                        className="text-2xl font-bold underline hover:text-color-secondary hover:no-underline"
                    >
                        Four ways to cheer yourself up on Blue Monday!
                    </Link>

                    <p className="leading-relaxed my-5">
                        On the second edition of Serious Business, Inc. editor
                        Jim Ledbetter and Fusion senior editor Salmon debate...
                    </p>

                    <a
                        href="#blog"
                        className="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out"
                    >
                        <span className="tracking-wider capitalize underline hover:no-underline">
                            Read more
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
