import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
const Home = () => {
    return (
        <section id="home">
            <div className="blob1"></div>
            <div className="blob2"></div>
            <div className="container py-20">
                <div className="flex flex-col items-center z-20 md:flex-row">
                    <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
                        <h1 className="title">
                            Awesome App for your Financial
                        </h1>
                        <p className="leading-relaxed mb-10">
                            This should be used to tell a story and let your
                            users know a little more about app and it's use, How
                            can benefit them.
                        </p>
                        <button className="btn">Download App</button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src={"/img/hero4.png"}
                            width={500}
                            height={500}
                            alt="hero"
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
