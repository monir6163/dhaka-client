import Image from "next/image";
import Link from "next/link";

const DownloadApp = () => {
    return (
        <section id="downloadapp" className="bg-color-primary-light">
            <div className="container h-[80vh] grid place-items-center">
                <div className="text-center md:w-2/3 m-auto">
                    <h1 className="title">
                        Download App Now And Save Your Money
                    </h1>
                    <p className="leading-relaxed pt-5">
                        Serving an impressive list of long-term money with
                        experience and expertise in multiple industries.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-10">
                        <Link
                            href="#"
                            className="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70"
                        >
                            <Image
                                src="/img/ios-store-dark.png"
                                width={133}
                                height={41}
                                alt="ios-dark"
                            />
                        </Link>
                        <Link
                            href="#"
                            className="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70"
                        >
                            <Image
                                src="/img/g-play-dark.png"
                                width={133}
                                height={41}
                                alt="android-dark"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
