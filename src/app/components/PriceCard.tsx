const PriceCard = () => {
    return (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="card relative h-auto w-auto">
                <div
                    id="card_one_front"
                    className="front px-7 py-11 rounded-xl border-2 border-solid border-color-gray h-full w-full "
                >
                    <div className="relative">
                        <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                            20
                            <span className="text-sm font-normal tracking-widest">
                                /per month
                            </span>
                        </p>
                    </div>
                    <div className="py-10">
                        <h3 className="text-xl font-bold pb-3">Basic</h3>
                        <p className="leading-relaxed">
                            For Beginner Who Want To Scale Business Globaly
                        </p>
                    </div>
                    <ul className="space-y-4 pb-10">
                        <li>
                            <i
                                className="fa fa-bookmark text-color-secondary"
                                aria-hidden="true"
                            ></i>
                            <span className="pl-4">Expense Management</span>
                        </li>
                        <li>
                            <i
                                className="fa fa-bookmark text-color-secondary"
                                aria-hidden="true"
                            ></i>
                            <span className="pl-4">Card Management</span>
                        </li>
                        <li>
                            <i
                                className="fa fa-bookmark text-color-gray"
                                aria-hidden="true"
                            ></i>
                            <span className="pl-4">Instant Statistics</span>
                        </li>
                        <li>
                            <i
                                className="fa fa-bookmark text-color-gray"
                                aria-hidden="true"
                            ></i>
                            <span className="pl-4">Bookmark Function</span>
                        </li>
                        <li>
                            <i
                                className="fa fa-bookmark text-color-gray"
                                aria-hidden="true"
                            ></i>
                            <span className="pl-4">Accounting System</span>
                        </li>
                    </ul>
                    <button className="card_btn">Get Started</button>
                </div>
                {/* back side */}
                <div
                    id="card_one_back"
                    className="back rotate-y-180 px-7 py-11 rounded-xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0"
                >
                    <div className="relative">
                        <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                            120
                            <span className="text-sm font-normal tracking-widest">
                                /per year
                            </span>
                        </p>
                    </div>
                    <div className="py-10">
                        <h3 className="text-xl font-bold pb-3">Basic</h3>
                        <p className="leading-relaxed">
                            For Beginner Who Want To Scale Business Globaly
                        </p>
                    </div>
                    <ul className="space-y-4 pb-10">
                        <li>
                            <i className="fa fa-bookmark text-color-secondary"></i>
                            <span className="pl-4">Expense Management</span>
                        </li>
                        <li>
                            <i className="fa fa-bookmark text-color-secondary"></i>
                            <span className="pl-4">Card Management</span>
                        </li>
                        <li>
                            <i className="fa fa-bookmark text-color-secondary"></i>
                            <span className="pl-4">Instant Statistics</span>
                        </li>
                        <li>
                            <i className="fa fa-bookmark text-color-secondary"></i>
                            <span className="pl-4">Bookmark Function</span>
                        </li>
                        <li>
                            <i className="fa fa-bookmark text-color-secondary"></i>
                            <span className="pl-4">Accounting System</span>
                        </li>
                    </ul>
                    <button className="card_btn">Get Started</button>
                </div>
            </div>
            {/* card 2 */}
            <div className="card relative h-auto w-auto">
                <div
                    id="card_two_front"
                    className="front px-7 py-11 rounded-xl border-2 border-solid border-color-gray h-full w-full "
                >
                    <div className="relative">
                        <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                            20
                            <span className="text-sm font-normal tracking-widest">
                                /per month
                            </span>
                        </p>
                    </div>
                    <div className="py-10">
                        <h3 className="text-xl font-bold pb-3">Basic</h3>
                        <p className="leading-relaxed">
                            For Beginner Who Want To Scale Business Globaly
                        </p>
                    </div>
                    <ul className="space-y-4 pb-10">
                        <li>
                            <i
                                className="fa fa-bookmark text-color-secondary"
                                aria-hidden="true"
                            ></i>
                            <span className="pl-4">Expense Management</span>
                        </li>
                        <li>
                            <i
                                className="fa fa-bookmark text-color-secondary"
                                aria-hidden="true"
                            ></i>
                            <span className="pl-4">Card Management</span>
                        </li>
                        <li>
                            <i
                                className="fa fa-bookmark text-color-gray"
                                aria-hidden="true"
                            ></i>
                            <span className="pl-4">Instant Statistics</span>
                        </li>
                        <li>
                            <i
                                className="fa fa-bookmark text-color-gray"
                                aria-hidden="true"
                            ></i>
                            <span className="pl-4">Bookmark Function</span>
                        </li>
                        <li>
                            <i
                                className="fa fa-bookmark text-color-gray"
                                aria-hidden="true"
                            ></i>
                            <span className="pl-4">Accounting System</span>
                        </li>
                    </ul>
                    <button className="card_btn">Get Started</button>
                </div>
                {/* back side */}
                <div
                    id="card_two_back"
                    className="back rotate-y-180 px-7 py-11 rounded-xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0"
                >
                    <div className="relative">
                        <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                            120
                            <span className="text-sm font-normal tracking-widest">
                                /per year
                            </span>
                        </p>
                    </div>
                    <div className="py-10">
                        <h3 className="text-xl font-bold pb-3">Basic</h3>
                        <p className="leading-relaxed">
                            For Beginner Who Want To Scale Business Globaly
                        </p>
                    </div>
                    <ul className="space-y-4 pb-10">
                        <li>
                            <i className="fa fa-bookmark text-color-secondary"></i>
                            <span className="pl-4">Expense Management</span>
                        </li>
                        <li>
                            <i className="fa fa-bookmark text-color-secondary"></i>
                            <span className="pl-4">Card Management</span>
                        </li>
                        <li>
                            <i className="fa fa-bookmark text-color-secondary"></i>
                            <span className="pl-4">Instant Statistics</span>
                        </li>
                        <li>
                            <i className="fa fa-bookmark text-color-secondary"></i>
                            <span className="pl-4">Bookmark Function</span>
                        </li>
                        <li>
                            <i className="fa fa-bookmark text-color-secondary"></i>
                            <span className="pl-4">Accounting System</span>
                        </li>
                    </ul>
                    <button className="card_btn">Get Started</button>
                </div>
            </div>
            {/* card 3 */}
            <div className="card relative h-auto w-auto">
                <div
                    id="card_three_front"
                    className="front px-7 py-11 rounded-xl border-2 border-solid border-color-gray h-full w-full "
                >
                    <div className="relative">
                        <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                            20
                            <span className="text-sm font-normal tracking-widest">
                                /per month
                            </span>
                        </p>
                    </div>
                    <div className="py-10">
                        <h3 className="text-xl font-bold pb-3">Basic</h3>
                        <p className="leading-relaxed">
                            For Beginner Who Want To Scale Business Globaly
                        </p>
                    </div>
                    <ul className="space-y-4 pb-10">
                        <li>
                            <i
                                className="fa fa-bookmark text-color-secondary"
                                aria-hidden="true"
                            ></i>
                            <span className="pl-4">Expense Management</span>
                        </li>
                        <li>
                            <i
                                className="fa fa-bookmark text-color-secondary"
                                aria-hidden="true"
                            ></i>
                            <span className="pl-4">Card Management</span>
                        </li>
                        <li>
                            <i
                                className="fa fa-bookmark text-color-gray"
                                aria-hidden="true"
                            ></i>
                            <span className="pl-4">Instant Statistics</span>
                        </li>
                        <li>
                            <i
                                className="fa fa-bookmark text-color-gray"
                                aria-hidden="true"
                            ></i>
                            <span className="pl-4">Bookmark Function</span>
                        </li>
                        <li>
                            <i
                                className="fa fa-bookmark text-color-gray"
                                aria-hidden="true"
                            ></i>
                            <span className="pl-4">Accounting System</span>
                        </li>
                    </ul>
                    <button className="card_btn">Get Started</button>
                </div>
                {/* back side */}
                <div
                    id="card_three_back"
                    className="back rotate-y-180 px-7 py-11 rounded-xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0"
                >
                    <div className="relative">
                        <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                            120
                            <span className="text-sm font-normal tracking-widest">
                                /per year
                            </span>
                        </p>
                    </div>
                    <div className="py-10">
                        <h3 className="text-xl font-bold pb-3">Basic</h3>
                        <p className="leading-relaxed">
                            For Beginner Who Want To Scale Business Globaly
                        </p>
                    </div>
                    <ul className="space-y-4 pb-10">
                        <li>
                            <i className="fa fa-bookmark text-color-secondary"></i>
                            <span className="pl-4">Expense Management</span>
                        </li>
                        <li>
                            <i className="fa fa-bookmark text-color-secondary"></i>
                            <span className="pl-4">Card Management</span>
                        </li>
                        <li>
                            <i className="fa fa-bookmark text-color-secondary"></i>
                            <span className="pl-4">Instant Statistics</span>
                        </li>
                        <li>
                            <i className="fa fa-bookmark text-color-secondary"></i>
                            <span className="pl-4">Bookmark Function</span>
                        </li>
                        <li>
                            <i className="fa fa-bookmark text-color-secondary"></i>
                            <span className="pl-4">Accounting System</span>
                        </li>
                    </ul>
                    <button className="card_btn">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;
