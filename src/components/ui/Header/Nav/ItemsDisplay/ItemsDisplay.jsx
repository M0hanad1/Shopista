import { useContext } from "react";
import "./ItemsDisplay.css";

export default function ItemsDisplay({ context }) {
    const products = Object.values(useContext(context))[0];
    const items = Object.values(products).reduce(
        (previous, current) => previous + (current.qty || 1),
        0
    );
    return (
        <span
            className="items-display"
            style={{ display: items ? "flex" : "none" }}
        >
            {items > 9 ? "+9" : items}
        </span>
    );
}
