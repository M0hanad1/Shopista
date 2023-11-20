import { useContext, useRef } from "react";
import { favoritesContext } from "../context/context";
import { setData } from "../utils/localStorage";
import "./Thumbnail.css";

export default function Thumbnail(props) {
    const { id, thumbnail } = props;
    const { favorites, setFavorites } = useContext(favoritesContext);
    const imageRef = useRef();

    function update() {
        let final = { ...favorites };
        final[id] ? delete final[id] : (final[id] = props);
        setData("favorites", final);
        setFavorites(final);
    }

    return (
        <div className="thumbnail">
            <img src={thumbnail} ref={imageRef} />
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
