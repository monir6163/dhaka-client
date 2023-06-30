const CardTwo = () => {
    return (
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            <div className="text-center cursor-pointer">
                <div className="relative bg-color-primary-dark inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200">
                    <p className="text-6xl lg:after:content-[''] lg:after:flex lg:after:bg-[url('/img/line.png')] lg:after:absolute lg:after:top-4 lg:after:left-32 2xl:after:left-52 lg:after:bg-no-repeat lg:after:h-7 lg:after:w-52">
                        1
                    </p>
                </div>
                <h3 className="text-xl font-bold py-4">Install The App</h3>
                <p className="leading-relaxed">
                    We use an application designed a testing gnose to keep away
                </p>
            </div>
            <div className="text-center cursor-pointer">
                <div className="relative inline-block px-6 py-3 rounded-lg cursor-pointer bg-color-secondary ">
                    <p className="text-6xl lg:after:content-[''] lg:after:flex lg:after:bg-[url('/img/line-bottom.png')] lg:after:absolute lg:after:top-10 lg:after:left-32 2xl:after:left-52 lg:after:bg-no-repeat lg:after:h-7 lg:after:w-52">
                        2
                    </p>
                </div>
                <h3 className="text-xl font-bold py-4">Setup Your profile</h3>
                <p className="leading-relaxed">
                    We use an application designed a testing gnose to keep away
                </p>
            </div>
            <div className="text-center cursor-pointer">
                <div className="relative bg-color-primary-dark inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200">
                    <p className="text-6xl">3</p>
                </div>
                <h3 className="text-xl font-bold py-4">Enjoy The Features!</h3>
                <p className="leading-relaxed">
                    We use an application designed a testing gnose to keep away
                </p>
            </div>
        </div>
    );
};

export default CardTwo;
