import { useContext, useState } from "react";
import { favoritesContext } from "../context/context";
import { setData } from "../utils/localStorage";
import "./Thumbnail.css";
import Loader from "./Loader";

export default function Thumbnail(props) {
    const { id, thumbnail, title } = props;
    const { favorites, setFavorites } = useContext(favoritesContext);
    const [isLoaded, setIsLoaded] = useState(false);

    function update() {
        let final = { ...favorites };
        final[id] ? delete final[id] : (final[id] = props);
        setData("favorites", final);
        setFavorites(final);
    }

    return (
        <div className="thumbnail">
            {!isLoaded && <Loader />}
            <div
                className="content"
                style={{ visibility: !isLoaded && "hidden" }}
            >
                <img
                    src={thumbnail}
                    alt={title}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setIsLoaded(true)}
                />
                <button onClick={update}>
                    <i
                        className={`fa-${
                            favorites[id] ? "solid" : "regular"
                        } fa-heart fade-in`}
                    ></i>
                </button>
            </div>
        </div>
    );
}
