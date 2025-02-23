"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    //header background color change on scroll desktop and mobile
    function handleScroll() {
      const header = document.querySelector("header");
      const toTop = document.querySelector("#toTop");

      if (header && toTop) {
        if (window.scrollY > 100) {
          header.classList.add("bg-color-primary-dark");
          header.classList.add("border-b");
          header.classList.add("border-color-gray");
          toTop.classList.remove("hidden");
        } else {
          header.classList.remove("bg-color-primary-dark");
          header.classList.remove("border-b");
          header.classList.remove("border-color-gray");
          toTop.classList.add("hidden");
        }
      }
    }

    // Add the scroll event listener to trigger the function
    window.addEventListener("scroll", handleScroll);

    //when scroll to top button clicked
    const toTop = document.querySelector("#toTop");
    if (toTop) {
      toTop.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }

    // Function to check screen width and set the isMobile state
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set the correct initial state

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Smooth scroll function
  const handleSmoothScroll = (e: any) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    //get a target for active color
    const navLink = document.querySelectorAll(".nav_Link");
    if (navLink) {
      navLink.forEach((link) => {
        link.classList.remove("text-color-secondary");
        e.currentTarget.classList.add("text-color-secondary");
      });
    }

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {isMobile ? (
        <MobileNavBar />
      ) : (
        <header className="sticky top-0 z-50 hidden md:block lg:block">
          <nav className="lg:container md:px-6 flex justify-between items-center">
            <div className="py-5 text-color-secondary font-bold text-3xl">
              <Link href="/" className="ease-in duration-200">
                <span className="text-white">SASS</span>app
              </Link>
            </div>
            <div>
              <ul className="hidden md:flex items-center space-x-6">
                <li>
                  <Link
                    href="#home"
                    className="hover:text-color-secondary ease-in duration-200 nav_Link"
                    onClick={handleSmoothScroll}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="hover:text-color-secondary ease-in duration-200 nav_Link"
                    onClick={handleSmoothScroll}
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonial"
                    className="hover:text-color-secondary ease-in duration-200 nav_Link"
                    onClick={handleSmoothScroll}
                  >
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="hover:text-color-secondary ease-in duration-200 nav_Link"
                    onClick={handleSmoothScroll}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blog"
                    className="hover:text-color-secondary ease-in duration-200 nav_Link"
                    onClick={handleSmoothScroll}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-color-secondary ease-in duration-200 nav_Link"
                    onClick={handleSmoothScroll}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <button className="btn">Free Trial</button>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default NavBar;
