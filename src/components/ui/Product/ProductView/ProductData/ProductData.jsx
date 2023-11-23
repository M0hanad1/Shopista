import Loader from "../../../../Loaders/Loader";
import "./ProductData.css";

export default function ProductData(props) {
    return (
        <div className="product-data">
            {!Object.keys(props).length ? (
                <Loader />
            ) : (
                <>
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                    <div className="info">
                        <div className="rating">
                            <i className="fa-solid fa-star"></i> {props.rating}
                        </div>
                        <span className="sep"></span>
                        <div className="stock">
                            <span>
                                {props.stock > 10 ? "+10" : props.stock}
                            </span>{" "}
                            in stock
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
