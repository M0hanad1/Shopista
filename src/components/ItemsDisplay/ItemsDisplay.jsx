import "./ItemsDisplay.css";

export default function ItemsDisplay({ items }) {
    return (
        <span
            className="items-display"
            style={{ display: items ? "flex" : "none" }}
        >
            {items > 9 ? "+9" : items}
        </span>
    );
}
