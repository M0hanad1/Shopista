import { Link, useSearchParams } from "react-router-dom";
import "./ButtonLink.css";
import { HashLink } from "react-router-hash-link";

export default function ButtonLink({ url, children }) {
    const [searchParams] = useSearchParams();

    return url.includes("#") ? (
        <HashLink
            className="button-link"
            to={`?${searchParams.toString()}${url}`}
        >
            {children}
        </HashLink>
    ) : (
        <Link className="button-link" to={url}>
            {children}
        </Link>
    );
}
