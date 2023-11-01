import Link from "next/link";
import { useEffect } from "react";
import "../../../assets/style.css";

const MobileNavBar = () => {
  useEffect(() => {
    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }

    if (navClose && navMenu) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }

    // hide when click a nav__link mobile
    const navLink = document.querySelectorAll(".nav__link");
    const navMenu2 = document.getElementById("nav-menu");
    const navToggle2 = document.getElementById("nav-toggle");
    if (navLink && navMenu2 && navToggle2) {
      navMenu2.addEventListener("click", () => {
        navMenu2.classList.remove("show-menu");
        navToggle2.classList.remove("show-menu");
      });
    }
  }, []);
  // Smooth scroll function
  const handleSmoothScroll = (e: any) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    //get a target for active color
    const navLink = document.querySelectorAll(".nav__link");
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
    <header className="w-full fixed bottom-0 left-0 bg-slate-800 shadow-lg z-[100] lg:hidden">
      <nav className="nav_mobile container">
        <div className="py-5 text-color-secondary font-bold text-3xl">
          <Link href="/">
            <span className="text-red-100">Dhaka</span>Client
          </Link>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                href="#home"
                className="nav__link"
                onClick={handleSmoothScroll}
              >
                <i className="fa fa-home nav__icon"></i>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#features"
                className="nav__link"
                onClick={handleSmoothScroll}
              >
                <i className="fa fa-cog nav__icon"></i> Features
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#testimonial"
                className="nav__link"
                onClick={handleSmoothScroll}
              >
                <i className="fa fa-file nav__icon"></i> Testimonial
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#pricing"
                className="nav__link"
                onClick={handleSmoothScroll}
              >
                <i className="fa fa-briefcase nav__icon"></i> Pricing
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#blog"
                className="nav__link"
                onClick={handleSmoothScroll}
              >
                <i className="fa fa-book nav__icon"></i> Blog
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#contact"
                className="nav__link"
                onClick={handleSmoothScroll}
              >
                <i className="fa fa-user nav__icon"></i> Contact
              </Link>
            </li>
          </ul>
          <i className="fa fa-times nav__close" id="nav-close"></i>
        </div>
        <div className="nav__btns">
          <i
            className="fa fa-moon theme-customization text-white"
            id="theme-button"
          ></i>
          <div className="nav__toggle" id="nav-toggle">
            <i className="fa fa-list text-white text-xl"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MobileNavBar;
