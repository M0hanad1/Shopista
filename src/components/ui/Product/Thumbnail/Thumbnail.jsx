import "./Thumbnail.css";
import ImageLoader from "../../../ImageLoader/";
import usePopups from "../../../../hooks/usePopups";
import useFavorites from "../../../../hooks/useFavorites";

export default function Thumbnail({ product, swipeRef, thumbnailAlt }) {
    const { id, thumbnail, title } = product;
    const { inFavorites, addFavorite, removeFavorite } = useFavorites();
    const isInFavorites = inFavorites(id);
    const { addPopup } = usePopups();

    function update() {
        isInFavorites ? removeFavorite(id) : addFavorite(product);
    }

    return (
        <div className="thumbnail" ref={swipeRef}>
            <ImageLoader src={thumbnailAlt || thumbnail} alt={title} />
            <button
                onClick={() => {
                    update(),
                        addPopup(
                            isInFavorites ? (
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
                            isInFavorites && "var(--red-color)"
                        );
                }}
            >
                <i
                    className={`fa-${
                        isInFavorites ? "solid" : "regular"
                    } fa-heart fade-in`}
                ></i>
            </button>
        </div>
    );
}
