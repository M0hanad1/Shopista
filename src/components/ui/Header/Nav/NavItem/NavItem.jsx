import { Link } from "react-router-dom";
import "./NavItem.css";

export default function NavItem({
    iconProps,
    title,
    link = "",
    items = 0,
    onClick = null,
}) {
    const children = (
        <i {...iconProps}>
            <span style={{ display: items ? "flex" : "none" }}>
                {items > 9 ? "+9" : items}
            </span>
        </i>
    );
    return link ? (
        <Link title={title} to={link} className="circle-hover nav-item">
            {children}
        </Link>
    ) : (
        <button
            onClick={onClick}
            title={title}
            className="circle-hover nav-item"
        >
            {children}
        </button>
    );
}
