import Loader from "../../../../Loaders/Loader";
import ImageLoader from "../../../../Loaders/ImageLoader";
import Thumbnail from "../../Thumbnail/Thumbnail";
import "./ProductImages.css";
import { useState } from "react";

export default function ProductImages({ product, windowWidth }) {
    const [active, setActive] = useState();
    return (
        <div className="product-images">
            {!Object.keys(product).length ? (
                <Loader />
            ) : (
                <>
                    <div className="holder">
                        <button
                            className={
                                !active || active === product.thumbnail
                                    ? "active"
                                    : ""
                            }
                            onClick={() => setActive(product.thumbnail)}
                        >
                            {windowWidth > 767 && (
                                <ImageLoader src={product.thumbnail} />
                            )}
                        </button>
                        {product.images.map(
                            (value, index) =>
                                value !== product.thumbnail && (
                                    <button
                                        className={
                                            active === value ? "active" : ""
                                        }
                                        key={index}
                                        onClick={() => setActive(value)}
                                    >
                                        {windowWidth > 767 && (
                                            <ImageLoader src={value} />
                                        )}
                                    </button>
                                )
                        )}
                    </div>
                    <Thumbnail
                        {...product}
                        thumbnail={active || product.thumbnail}
                    />
                </>
            )}
        </div>
    );
}
