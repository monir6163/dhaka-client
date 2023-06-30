/* eslint-disable react/no-unescaped-entities */

import Card from "./Card";

const Features = () => {
    return (
        <section id="features" className="bg-color-primary-light">
            <div className="container py-20">
                <div className="text-center m-auto mb-20 md:w-1/2">
                    <h4 className="font-bold text-color-secondary mb-4">
                        Our Feature's
                    </h4>
                    <h1 className="title">
                        Easy To Manage Your All Payments By Our App
                    </h1>
                </div>
                <Card />
            </div>
        </section>
    );
};

export default Features;
