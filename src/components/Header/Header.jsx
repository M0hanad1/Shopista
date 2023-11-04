import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <Logo />
                <Search />
                <Nav />
            </div>
        </div>
    );
}
