import { useContext } from "react";
import { favoritesContext } from "../../../../context/context";
import { setData } from "../../../../utils/localStorage";
import "./Thumbnail.css";
import ImageLoader from "../../../Loaders/ImageLoader";
import Popup from "../../../Popup";

export default function Thumbnail(props) {
    const { id, thumbnail, title } = props;
    const { favorites, setFavorites } = useContext(favoritesContext);

    function update() {
        let final = { ...favorites };
        final[id] ? delete final[id] : (final[id] = props);
        setData("favorites", final);
        setFavorites(final);
    }

    return (
        <div className="thumbnail">
            <ImageLoader src={thumbnail} alt={title} />
            <Popup
                trigger={
                    <button onClick={update}>
                        <i
                            className={`fa-${
                                favorites[id] ? "solid" : "regular"
                            } fa-heart fade-in`}
                        ></i>
                    </button>
                }
                color={!favorites[id] && "var(--red-color)"}
            >
                {favorites[id] ? (
                    <i className="fa-solid fa-heart"></i>
                ) : (
                    <i className="fa-solid fa-heart-crack"></i>
                )}
                Product {favorites[id] ? "added to" : "removed from"} the
                Favorites
            </Popup>
        </div>
    );
}
