"use client";
import Image from "next/image";
import { useEffect } from "react";

/* eslint-disable react/no-unescaped-entities */
const Testimonial = () => {
    useEffect(() => {
        const userImg = document.getElementsByClassName("user-img");
        const userText = document.getElementsByClassName("user-text");

        let i = 0;
        const playTestimonial = () => {
            userImg[i].classList.add("active-img");
            userText[i].classList.add("active-text");

            if (i > 0) {
                userImg[i - 1].classList.remove("active-img");
                userText[i - 1].classList.remove("active-text");
            } else {
                userImg[userImg.length - 1].classList.remove("active-img");
                userText[userText.length - 1].classList.remove("active-text");
            }

            i = (i + 1) % userImg.length;
        };

        const interval = setInterval(playTestimonial, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <section id="testimonial">
            <div className="container py-20">
                <div className="text-center m-auto mb-20 md:w-1/2">
                    <h4 className="font-bold text-color-secondary mb-4">
                        User Review
                    </h4>
                    <h1 className="title">
                        What Client's Say About Our App After Using It
                    </h1>
                </div>
                <div className="mt-8">
                    <div className="flex items-center justify-center flex-wrap">
                        <Image
                            className="w-20 h-20 rounded-full p-1 m-3 cursor-pointer user-img active-img"
                            src={"/img/user1.jpg"}
                            width={50}
                            height={50}
                            alt="user1"
                        />
                        <Image
                            className="w-20 h-20 rounded-full p-1 m-3 cursor-pointer user-img"
                            src={"/img/user2.jpg"}
                            width={50}
                            height={50}
                            alt="user1"
                        />
                        <Image
                            className="w-20 h-20 rounded-full p-1 m-3 cursor-pointer user-img"
                            src={"/img/user3.jpg"}
                            width={50}
                            height={50}
                            alt="user1"
                        />
                        <Image
                            className="w-20 h-20 rounded-full p-1 m-3 cursor-pointer user-img"
                            src={"/img/user4.jpg"}
                            width={50}
                            height={50}
                            alt="user1"
                        />
                        <Image
                            className="w-20 h-20 rounded-full p-1 m-3 cursor-pointer user-img"
                            src={"/img/user5.jpg"}
                            width={50}
                            height={50}
                            alt="user1"
                        />
                    </div>
                    <div className="grid place-items-center text-center m-auto md:w-4/5 min-h-[40vh]">
                        <div className="user-text active-text">
                            <p className="md:text-2xl mb-6">
                                This should be used to tell a story and include
                                any testimonials you might have about your
                                product or service for your clients!
                            </p>
                            <h4 className="font-bold text-color-secondary">
                                Markin Nesus
                            </h4>
                            <p>Mern Stack</p>
                        </div>
                        <div className="user-text">
                            <p className="md:text-2xl mb-6">
                                This should be used to tell a story and include
                                any testimonials you might have about your
                                product or service for your clients!
                            </p>
                            <h4 className="font-bold text-color-secondary">
                                Jhon Doe
                            </h4>
                            <p>Full Stack</p>
                        </div>
                        <div className="user-text">
                            <p className="md:text-2xl mb-6">
                                This should be used to tell a story and include
                                any testimonials you might have about your
                                product or service for your clients!
                            </p>
                            <h4 className="font-bold text-color-secondary">
                                Mark Nesus
                            </h4>
                            <p>Ios Developer</p>
                        </div>
                        <div className="user-text">
                            <p className="md:text-2xl mb-6">
                                This should be used to tell a story and include
                                any testimonials you might have about your
                                product or service for your clients!
                            </p>
                            <h4 className="font-bold text-color-secondary">
                                Markin Nesus
                            </h4>
                            <p>Ui/Ux Designer</p>
                        </div>
                        <div className="user-text">
                            <p className="md:text-2xl mb-6">
                                This should be used to tell a story and include
                                any testimonials you might have about your
                                product or service for your clients!
                            </p>
                            <h4 className="font-bold text-color-secondary">
                                Pathan Nesus
                            </h4>
                            <p>Python Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
