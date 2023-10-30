import "./Logo.css";
import { HashLink } from "react-router-hash-link";

export default function Logo() {
    return (
        <HashLink className="important logo" to="/#">
            <i className="fa-solid fa-shop"></i>
            <span>Shopista</span>
        </HashLink>
    );
}
