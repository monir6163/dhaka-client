const FooterBar = () => {
  return (
    <section id="footerbar">
      <div className="bg-color-primary-dark relative">
        <div className="container py-10">
          <div className="grid gap-10 md:grid-cols-3 pb-10">
            <div className="space-y-6">
              <h4 className="font-bold text-lg">
                About <span className="text-color-secondary">Dhaka</span>
                Client
              </h4>
              <p className="leading-relaxed">
                This Should Be Used To Tell A Story And Include Any Testimonials
                You Might Have About Your Product Or Service For Your Clients
              </p>
              <div className="flex gap-5 items-center">
                <p>Follow Us</p>
                <i className="fa fa-facebook-f cursor-pointer hover:text-color-secondary"></i>
                <i className="fa fa-twitter cursor-pointer hover:text-color-secondary"></i>
                <i className="fa fa-youtube cursor-pointer hover:text-color-secondary"></i>
                <i className="fa fa-instagram cursor-pointer hover:text-color-secondary"></i>
              </div>
            </div>
            <div className="flex justify-between md:justify-around">
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Quick Links</h4>
                <ul className="space-y-3">
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#">Home</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#">Features</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#">Testimonial</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#">Pricing</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#">Blog</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Help</h4>
                <ul className="space-y-3">
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#">About Us</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#">Partners</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#">Career</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#">Reviews</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#">Help</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Newsletter</h4>
              <p className="leading-relaxed">
                Subscribe With Email And Loads Of News Will Be Sent To You
              </p>
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-3/4 text-color-gray bg-color-white p-2 lg:p-3 rounded-l-md focus:outline-none"
                  placeholder="Enter Your Email"
                />

                <button
                  type="submit"
                  className="bg-color-secondary px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90"
                >
                  <i className="fa fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-10 border-t border-color-gray">
            <p>
              2023 &copy; <span className="text-color-secondary">Dhaka</span>
              Client. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-14 lg:bottom-5 right-5 z-50">
        <button
          id="toTop"
          className="hidden bg-color-secondary text-color-white p-3 rounded-full hover:opacity-90"
        >
          <i className="fa fa-chevron-up text-sm"></i>
        </button>
      </div>
    </section>
  );
};

export default FooterBar;
