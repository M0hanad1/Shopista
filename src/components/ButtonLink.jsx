import { Link } from "react-router-dom";
import "./ButtonLink.css";

export default function ButtonLink({ url, children }) {
    return url.includes("#") ? (
        <a className="button-link" href={url}>
            {children}
        </a>
    ) : (
        <Link className="button-link" to={url}>
            {children}
        </Link>
    );
}
