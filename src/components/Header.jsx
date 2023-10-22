import Logo from "./Logo";
import Nav from "./Nav";
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <Logo isTitled={true} />
                <Nav />
            </div>
        </div>
    );
}
