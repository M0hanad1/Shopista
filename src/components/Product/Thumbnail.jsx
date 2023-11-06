import { useContext } from "react";
import "./Thumbnail.css";
import { favoritesContext } from "../../Context";

export default function Thumbnail(props) {
    const { id, thumbnail } = props;
    const { favorites, setFavorites } = useContext(favoritesContext);

    function update() {
        let final = { ...favorites };
        final[id] ? delete final[id] : (final[id] = props);
        localStorage.setItem("favorites", JSON.stringify(final));
        setFavorites(final);
    }

    return (
        <div className="thumbnail">
            <img src={thumbnail} />
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
