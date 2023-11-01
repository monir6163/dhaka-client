import {
  UilApps,
  UilBriefcaseAlt,
  UilEstate,
  UilFileAlt,
  UilMessage,
  UilPalette,
  UilScenery,
  UilTimes,
  UilUser,
} from "@iconscout/react-unicons";
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
                <UilEstate className="nav__icon" />
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#features"
                className="nav__link"
                onClick={handleSmoothScroll}
              >
                <UilUser className="nav__icon" /> Features
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#testimonial"
                className="nav__link"
                onClick={handleSmoothScroll}
              >
                <UilFileAlt className="nav__icon" /> Testimonial
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#pricing"
                className="nav__link"
                onClick={handleSmoothScroll}
              >
                <UilBriefcaseAlt className="nav__icon" /> Pricing
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#blog"
                className="nav__link"
                onClick={handleSmoothScroll}
              >
                <UilScenery className="nav__icon" /> Blog
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#contact"
                className="nav__link"
                onClick={handleSmoothScroll}
              >
                <UilMessage className="nav__icon" /> Contact
              </Link>
            </li>
          </ul>
          <UilTimes className="nav__close" id="nav-close" />
        </div>
        <div className="nav__btns">
          <UilPalette
            className="theme-customization text-white"
            id="theme-button"
          />
          <div className="nav__toggle" id="nav-toggle">
            <UilApps className="text-white" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MobileNavBar;
