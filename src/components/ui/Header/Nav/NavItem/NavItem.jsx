import { Link } from "react-router-dom";
import ItemsDisplay from "./ItemsDisplay";
import "./NavItem.css";

export default function NavItem({
    iconProps,
    title,
    link = "",
    onClick = null,
    context = null,
}) {
    return link ? (
        <Link title={title} to={link} className="circle-hover nav-item">
            <i {...iconProps}>
                {context && <ItemsDisplay context={context} />}
            </i>
        </Link>
    ) : (
        <button
            onClick={onClick}
            title={title}
            className="circle-hover nav-item"
        >
            <i {...iconProps}>
                {context && <ItemsDisplay context={context} />}
            </i>
        </button>
    );
}
