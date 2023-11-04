import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useRef, useEffect } from "react";

export default function Nav() {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        if (!localStorage.getItem("theme")) localStorage.setItem("theme", true);
        const theme = JSON.parse(localStorage.getItem("theme"));
        !theme ? document.documentElement.classList.add("light") : "";
        return theme;
    });

    const barsRef = useRef(null);
    const navRef = useRef(null);

    function hideNav() {
        if (barsRef.current) barsRef.current.classList.remove("active");
    }

    function showNav() {
        barsRef.current.classList.add("active");
    }

    function changeTheme() {
        setIsDarkTheme(!isDarkTheme);
        document.documentElement.classList.toggle("light");
        localStorage.setItem("theme", !isDarkTheme);
    }

    useEffect(() => {
        function handleClick(e) {
            if (
                barsRef.current.contains(e.target) &&
                !barsRef.current.classList.contains("active")
            ) {
                showNav();
            } else if (
                navRef.current &&
                barsRef.current.classList.contains("active")
            ) {
                hideNav();
            }
        }
        document.addEventListener("click", handleClick);
        document.addEventListener("scroll", hideNav);
        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("scroll", hideNav);
        };
    }, []);

    return (
        <div className="nav">
            <button ref={barsRef} className="bars">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="nav-items" ref={navRef}>
                <Link to="/cart" className="circle-hover" data="Cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <Link to="/favorites" className="circle-hover" data="Favorites">
                    <i className="fa-solid fa-heart"></i>
                </Link>
                <button
                    data={isDarkTheme ? "Light Mode" : "Dark Mode"}
                    className="circle-hover"
                    onClick={changeTheme}
                >
                    <i
                        style={{ transition: "transform 0.1s" }}
                        className={
                            "fa-solid fa-circle-half-stroke " +
                            (!isDarkTheme && "fa-flip-horizontal")
                        }
                    ></i>
                </button>
            </div>
        </div>
    );
}
