import { Link } from "react-router-dom";
import "./ProductTitle.css";

export default function ProductTitle({ id, title }) {
    return (
        <Link className="product-title" to={`/product/${id}`}>
            {title}
        </Link>
    );
}
