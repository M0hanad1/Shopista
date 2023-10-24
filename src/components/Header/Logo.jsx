import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo() {
    return (
        <Link className="important important-hover logo" to="/">
            <i className="fa-solid fa-shop"></i>
            <span>Shopista</span>
        </Link>
    );
}
