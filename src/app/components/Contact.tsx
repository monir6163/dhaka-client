import React from "react";

const Contact = () => {
    return (
        <section id="contact">
            <div className="container py-20">
                <div className="text-center m-auto mb-20 md:w-1/2">
                    <h4 className="font-bold text-color-secondary mb-4">
                        Have A Questation
                    </h4>
                    <h1 className="title">Get In Touch</h1>
                </div>
                <form>
                    <div className="w-full m-auto text-center md:w-2/3">
                        <div className="text-color-primary-dark grid gap-6 mb-6 md:grid-cols-2">
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                                placeholder="Email"
                            />
                            <input
                                type="tel"
                                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                                placeholder="Phone"
                            />
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                                placeholder="Company"
                            />
                        </div>
                        <textarea
                            rows={4}
                            className="text-color-primary-dark bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                            placeholder="Message"
                        ></textarea>
                        <button className="btn mt-10">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
