import { useContext } from "react";
import "./Product.css";
import { cartContext } from "../../Context";
import Thumbnail from "./Thumbnail";

export default function Product(props) {
    const {
        id,
        title,
        rating,
        description,
        category,
        price,
        discountPercentage,
    } = props;
    const { cart, setCart } = useContext(cartContext);

    function update() {
        let final = { ...cart };
        final[id] ? delete final[id] : (final[id] = props);
        localStorage.setItem("cart", JSON.stringify(final));
        setCart(final);
    }

    return (
        <div className="product">
            <Thumbnail {...props} />
            <div className="data">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="info">
                    <p>{category}</p>
                </div>
                <div className="price">
                    <p>
                        <span className="dollar">$</span>
                        {price.toFixed(2)}
                    </p>
                    <div className="old">
                        <p>
                            <span className="dollar">$</span>
                            {(
                                (price / (100 - discountPercentage)) *
                                100
                            ).toFixed(2)}
                        </p>
                        <span className="discount">
                            {discountPercentage}% OFF
                        </span>
                    </div>
                </div>
                <div className="bottom">
                    <button onClick={update}>
                        <i
                            className={`${
                                cart[id]
                                    ? "fa-solid fa-cart-arrow-down"
                                    : "fa-solid fa-cart-plus"
                            } cart-action important`}
                        ></i>
                    </button>
                    <span className="rating">
                        <i className="fa-solid fa-star"></i>
                        {rating.toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
}
