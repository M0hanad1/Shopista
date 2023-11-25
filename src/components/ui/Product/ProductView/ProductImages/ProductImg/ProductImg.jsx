import ImageLoader from "../../../../../Loaders/ImageLoader";
import "./ProductImg.css";

export default function ProductImg({
    currentThumbnail,
    index,
    value,
    onClick,
    isSmallScreen,
}) {
    return (
        <button
            className={`product-img ${
                currentThumbnail === value ? "active" : ""
            }`}
            key={index}
            onClick={onClick}
        >
            {!isSmallScreen && <ImageLoader src={value} />}
        </button>
    );
}
