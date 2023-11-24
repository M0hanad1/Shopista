import Loader from "../../../../Loaders/Loader";
import ImageLoader from "../../../../Loaders/ImageLoader";
import Thumbnail from "../../Thumbnail/Thumbnail";
import "./ProductImages.css";
import { useState } from "react";

export default function ProductImages(props) {
    const [active, setActive] = useState();
    return (
        <div className="product-images">
            {!Object.keys(props).length ? (
                <Loader />
            ) : (
                <>
                    <div className="holder">
                        <button
                            className={
                                !active || active === props.thumbnail
                                    ? "active"
                                    : ""
                            }
                            onClick={() => setActive(props.thumbnail)}
                        >
                            <ImageLoader src={props.thumbnail} />
                        </button>
                        {props.images.map(
                            (value, index) =>
                                value !== props.thumbnail && (
                                    <button
                                        className={
                                            active === value ? "active" : ""
                                        }
                                        key={index}
                                        onClick={() => setActive(value)}
                                    >
                                        <ImageLoader src={value} />
                                    </button>
                                )
                        )}
                    </div>
                    <Thumbnail
                        {...props}
                        thumbnail={active || props.thumbnail}
                    />
                </>
            )}
        </div>
    );
}
