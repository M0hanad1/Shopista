import { Link } from "react-router-dom";
import "./NavItem.css";
import ItemsDisplay from "../../../../ItemsDisplay";

export default function NavItem({
    iconProps,
    title,
    link = "",
    items = 0,
    onClick = null,
}) {
    const children = (
        <i {...iconProps}>
            <ItemsDisplay items={items} />
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
