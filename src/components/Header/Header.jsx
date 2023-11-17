import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";
import "./Header.css";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [scrollY, setScrollY] = useState(window.scrollY);
    const headerRef = useRef();

    useEffect(() => {
        function handleScroll() {
            scrollY > window.scrollY
                ? headerRef.current.classList.remove("hide")
                : headerRef.current.classList.add("hide");
            setScrollY(window.scrollY);
        }
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, [scrollY]);

    return (
        <header ref={headerRef}>
            <div className="container">
                <Logo />
                <Search />
                <Nav />
            </div>
        </header>
    );
}
