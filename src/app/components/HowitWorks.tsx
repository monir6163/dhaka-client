import CardTwo from "./CardTwo";

/* eslint-disable react/no-unescaped-entities */
const HowitWorks = () => {
    return (
        <section id="how-it-works">
            <div className="container py-20">
                <div className="text-center m-auto mb-20 md:w-1/2">
                    <h4 className="font-bold text-color-secondary mb-4">
                        How It Works
                    </h4>
                    <h1 className="title">Grow Up Your Money Saving</h1>
                </div>
                <CardTwo />
            </div>
        </section>
    );
};

export default HowitWorks;
