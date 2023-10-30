import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./ButtonLink.css";

export default function ButtonLink({ url, children }) {
    return url.includes("#") ? (
        <HashLink className="button-link" to={url}>
            {children}
        </HashLink>
    ) : (
        <Link className="button-link" to={url}>
            {children}
        </Link>
    );
}
