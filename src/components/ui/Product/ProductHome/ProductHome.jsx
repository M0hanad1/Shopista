import "./ProductHome.css";
import Thumbnail from "../Thumbnail";
import ProductTitle from "../ProductTitle";
import Price from "../Price";
import usePopups from "../../../../hooks/usePopups";
import useCart from "../../../../hooks/useCart";
import { useNavigate } from "react-router-dom";

export default function ProductHome(props) {
    const {
        id,
        title,
        rating,
        description,
        category,
        price,
        discountPercentage,
    } = props;
    const navigate = useNavigate();
    const { addPopup } = usePopups();
    const { inCart, removeFromCart, addToCart } = useCart();
    const isInCart = inCart(id);

    function update() {
        isInCart ? removeFromCart(id) : addToCart(props);
    }

    return (
        <div className="product-home">
            <Thumbnail product={props} />
            <div className="data">
                <ProductTitle id={id} title={title} />
                <p>{description}</p>
                <button
                    className="category"
                    onClick={() => navigate(`/?category=${category}#products`)}
                >
                    {category}
                </button>
                <Price discountPercentage={discountPercentage} price={price} />
                <div className="bottom">
                    <button
                        onClick={() => {
                            update(),
                                addPopup(
                                    isInCart ? (
                                        <>
                                            <i className="fa-solid fa-trash"></i>
                                            Product removed from the cart
                                        </>
                                    ) : (
                                        <>
                                            <i className="fa-solid fa-cart-plus"></i>
                                            Product added to the Cart
                                        </>
                                    ),
                                    isInCart && "var(--red-color)"
                                );
                        }}
                    >
                        <i
                            className={`${
                                isInCart
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
