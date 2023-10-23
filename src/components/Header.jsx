import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";
import "./Header.css";
import { useEffect, useState } from "react";

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="header">
            <div className="container">
                <Logo isTitled />
                {windowWidth < 768 ? (
                    <Nav search={<Search isSmall />} />
                ) : (
                    <>
                        <Search />
                        <Nav />
                    </>
                )}
            </div>
        </div>
    );
}
