import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo({ isTitled }) {
    return (
        <Link className="logo" to="/">
            <i className="fa-solid fa-shop"></i>
            {isTitled && <span>Shop</span>}
        </Link>
    );
}
