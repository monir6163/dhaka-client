"use client";
import Link from "next/link";
import { useEffect } from "react";

const NavBar = () => {
    useEffect(() => {
        //header background color change on scroll desktop and mobile
        const header = document.querySelector("header");
        const toTop = document.querySelector("#toTop");
        if (header && toTop) {
            window.onscroll = () => {
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
            };
        }
        //totop button show on scroll
        if (toTop) {
            toTop.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            });
        }

        //hamburger menu toggle on click mobile
        const hamburger = document.querySelector("#hamburger");
        const menu = document.querySelector("#menu");
        const hLink = document.querySelectorAll("#hLink");
        const faSolid = document.querySelector(".fa");
        if (hamburger && menu && hLink && faSolid) {
            hamburger.addEventListener("click", () => {
                console.log("clicked");
                menu.classList.toggle("hidden");
                faSolid.classList.toggle("fa-times");
            });
            hLink.forEach((link) => {
                link.addEventListener("click", () => {
                    menu.classList.toggle("hidden");
                    faSolid.classList.toggle("fa-times");
                    hamburger.classList.toggle("block");
                });
            });
        }
        //scroll to section on click navbar item
        const navbarLinks = document.querySelectorAll("header ul li a");

        if (navbarLinks) {
            navbarLinks.forEach((navbarLink) => {
                navbarLink.addEventListener("click", (e) => {
                    e.preventDefault();
                    const href = navbarLink.getAttribute("href");
                    if (href) {
                        const target = document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            });
                        }
                    }
                });
            });
        } else {
            return;
        }
    }, []);
    return (
        <header className="sticky top-0 z-50">
            <nav className="container flex justify-between items-center">
                <div className="py-5 text-color-secondary font-bold text-3xl">
                    <Link href="/" legacyBehavior>
                        <a>
                            <span className="text-white">Dhaka</span>Client
                        </a>
                    </Link>
                </div>
                <div>
                    <ul className="hidden lg:flex items-center space-x-6">
                        <li>
                            <Link href="#home" legacyBehavior>
                                <a className="hover:text-color-secondary ease-in duration-200">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#features"
                                legacyBehavior
                                className="hover:text-color-secondary ease-in duration-200"
                            >
                                <a className="hover:text-color-secondary ease-in duration-200">
                                    Features
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#testimonial" legacyBehavior>
                                <a className="hover:text-color-secondary ease-in duration-200">
                                    Testimonial
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#pricing" legacyBehavior>
                                <a className="hover:text-color-secondary ease-in duration-200">
                                    Pricing
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#blog" legacyBehavior>
                                <a className="hover:text-color-secondary ease-in duration-200">
                                    Blog
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" legacyBehavior>
                                <a className="hover:text-color-secondary ease-in duration-200">
                                    Contact Us
                                </a>
                            </Link>
                        </li>
                        <li>
                            <button className="btn">Free Trial</button>
                        </li>
                    </ul>
                </div>

                <div id="hamburger" className="lg:hidden cursor-pointer z-50">
                    <i className="fa fa-bars text-2xl"></i>
                </div>
                <div
                    id="menu"
                    className="hidden bg-color-primary-dark h-[100vh] absolute inset-0"
                >
                    <ul className="h-full grid place-items-center py-20">
                        <li>
                            <Link href="#home" legacyBehavior>
                                <a
                                    className="hover:text-color-secondary ease-in duration-200"
                                    id="hLink"
                                >
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#features"
                                legacyBehavior
                                className="hover:text-color-secondary ease-in duration-200"
                            >
                                <a
                                    className="hover:text-color-secondary ease-in duration-200"
                                    id="hLink"
                                >
                                    Features
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#testimonial" legacyBehavior>
                                <a
                                    className="hover:text-color-secondary ease-in duration-200"
                                    id="hLink"
                                >
                                    Testimonial
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#pricing" legacyBehavior>
                                <a
                                    className="hover:text-color-secondary ease-in duration-200"
                                    id="hLink"
                                >
                                    Pricing
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#blog" legacyBehavior>
                                <a
                                    className="hover:text-color-secondary ease-in duration-200"
                                    id="hLink"
                                >
                                    Blog
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" legacyBehavior>
                                <a
                                    className="hover:text-color-secondary ease-in duration-200"
                                    id="hLink"
                                >
                                    Contact Us
                                </a>
                            </Link>
                        </li>
                        <li>
                            <button className="btn">Free Trial</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
