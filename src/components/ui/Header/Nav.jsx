import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useRef, useEffect } from "react";
import { getData, setData } from "../../../utils/localStorage";
import CartItem from "./CartItem";

export default function Nav() {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const theme = getData("theme", true);
        !theme && document.documentElement.classList.add("light");
        return theme;
    });
    const barsRef = useRef();
    const navRef = useRef();

    function hideNav() {
        barsRef.current.classList.remove("active");
    }

    function showNav() {
        barsRef.current.classList.add("active");
    }

    function changeTheme() {
        setIsDarkTheme(!isDarkTheme);
        document.documentElement.classList.toggle("light");
        setData("theme", !isDarkTheme);
    }

    useEffect(() => {
        function handleClick(e) {
            if (
                barsRef.current.contains(e.target) &&
                !barsRef.current.classList.contains("active")
            ) {
                showNav();
            } else if (barsRef.current.classList.contains("active")) {
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
        <nav>
            <button ref={barsRef} className="bars">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="nav-items" ref={navRef}>
                <CartItem />
                <Link to="/favorites" className="circle-hover" data="Favorites">
                    <i className="fa-solid fa-heart"></i>
                </Link>
                <button
                    data={isDarkTheme ? "Light Mode" : "Dark Mode"}
                    className="circle-hover"
                    onClick={changeTheme}
                >
                    <i
                        style={{ transition: "transform 0.3s" }}
                        className={
                            "fa-solid fa-circle-half-stroke " +
                            (!isDarkTheme && "fa-flip-horizontal")
                        }
                    ></i>
                </button>
            </div>
        </nav>
    );
}
