import { useContext } from "react";
import { favoritesContext } from "../context/context";
import { setData } from "../utils/localStorage";
import "./Thumbnail.css";
import ImageLoader from "./ImageLoader";

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
            <button onClick={update}>
                <i
                    className={`fa-${
                        favorites[id] ? "solid" : "regular"
                    } fa-heart fade-in`}
                ></i>
            </button>
        </div>
    );
}
