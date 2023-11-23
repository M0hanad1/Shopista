import Loader from "../../../../Loaders/Loader";
import ImageLoader from "../../../../Loaders/ImageLoader";
import Thumbnail from "../../Thumbnail/Thumbnail";
import "./ProductImages.css";

export default function ProductImages(props) {
    return (
        <div className="product-images">
            {!Object.keys(props).length ? (
                <Loader />
            ) : (
                <>
                    <div className="holder">
                        {props.images.map((value, index) => (
                            <ImageLoader src={value} key={index} />
                        ))}
                    </div>
                    <Thumbnail {...props} />
                </>
            )}
        </div>
    );
}
