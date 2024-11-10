"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import  "../styles/header.css";


function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const toggleMenu = () => {
        setNavOpen(prevState => !prevState)
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <Image src="/logo.png"alt="my-logo"className="logo" width={30} height={10} /> 
                    <h1 className="site-title">Qurratulain Soomro</h1>
                    <button className="menu-button"
                       onClick= {toggleMenu}> &#9776;
                    

                       </button>
                </div>

                <nav className={`nav ${navOpen ? "nav-open" : ''}`}>
                    <div className="nav-links">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/portfolio">Portfolio</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <a href="/my-portfolio.pdf"
                    download="My-portfolio.pdf"
                    className="download-button">
                        Download
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header;