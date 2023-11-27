import { useContext } from "react";
import { favoritesContext } from "../../../../context/context";
import { setData } from "../../../../utils/localStorage";
import "./Thumbnail.css";
import ImageLoader from "../../../Loaders/ImageLoader";
import usePopups from "../../../../hooks/usePopups";

export default function Thumbnail({ product, swipeRef, thumbnailAlt }) {
    const { id, thumbnail, title } = product;
    const { favorites, setFavorites } = useContext(favoritesContext);
    const { addPopup } = usePopups();

    function update() {
        let final = { ...favorites };
        final[id] ? delete final[id] : (final[id] = product);
        setData("favorites", final);
        setFavorites(final);
    }

    return (
        <div className="thumbnail" ref={swipeRef}>
            <ImageLoader src={thumbnailAlt || thumbnail} alt={title} />
            <button
                onClick={() => {
                    update(),
                        addPopup(
                            favorites[id] ? (
                                <>
                                    <i className="fa-solid fa-heart-crack"></i>
                                    Product removed from the Favorites
                                </>
                            ) : (
                                <>
                                    <i className="fa-solid fa-heart"></i>Product
                                    added to the Favorites
                                </>
                            ),
                            favorites[id] && "var(--red-color)"
                        );
                }}
            >
                <i
                    className={`fa-${
                        favorites[id] ? "solid" : "regular"
                    } fa-heart fade-in`}
                ></i>
            </button>
        </div>
    );
}
