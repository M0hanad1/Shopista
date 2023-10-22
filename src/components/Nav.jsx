import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        if (!localStorage.getItem("theme")) localStorage.setItem("theme", true);
        const theme = JSON.parse(localStorage.getItem("theme"));
        !theme ? document.documentElement.classList.add("light") : "";
        return theme;
    });

    return (
        <div className="nav">
            <Link to="/cart" className="circle-hover">
                <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <i
                onClick={() => {
                    setIsDarkTheme(!isDarkTheme);
                    document.documentElement.classList.toggle("light");
                    localStorage.setItem("theme", !isDarkTheme);
                }}
                className={
                    (isDarkTheme ? "fa-regular fa-moon" : "fa-solid fa-sun") +
                    " circle-hover"
                }
                style={{ cursor: "pointer" }}
            ></i>
        </div>
    );
}
