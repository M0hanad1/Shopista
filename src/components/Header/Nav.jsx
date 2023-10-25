import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav({ search }) {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        if (!localStorage.getItem("theme")) localStorage.setItem("theme", true);
        const theme = JSON.parse(localStorage.getItem("theme"));
        !theme ? document.documentElement.classList.add("light") : "";
        return theme;
    });

    return (
        <div className="nav">
            {search}
            <Link to="/cart" className="circle-hover">
                <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <Link to="/favorites" className="circle-hover">
                <i className="fa-solid fa-heart"></i>
            </Link>
            <button
                className="circle-hover"
                onClick={() => {
                    setIsDarkTheme(!isDarkTheme);
                    document.documentElement.classList.toggle("light");
                    localStorage.setItem("theme", !isDarkTheme);
                }}
            >
                <i
                    className={`fa-solid ${
                        isDarkTheme ? "fa-moon" : "fa-solid fa-sun"
                    }`}
                ></i>
            </button>
        </div>
    );
}
