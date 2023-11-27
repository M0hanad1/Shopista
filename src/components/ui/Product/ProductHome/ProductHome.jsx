import { useContext } from "react";
import "./ProductHome.css";
import Thumbnail from "../Thumbnail";
import { cartContext } from "../../../../context/context";
import { setData } from "../../../../utils/localStorage";
import ProductTitle from "../ProductTitle";
import Price from "../Price";
import usePopups from "../../../../hooks/usePopups";

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
    const { cart, setCart } = useContext(cartContext);
    const { addPopup } = usePopups();

    function update() {
        let final = { ...cart };
        final[id] ? delete final[id] : (final[id] = { ...props, qty: 1 });
        setData("cart", final);
        setCart(final);
    }

    return (
        <div className="product-home">
            <Thumbnail product={props} />
            <div className="data">
                <ProductTitle id={id} title={title} />
                <p>{description}</p>
                <div className="info">
                    <p>{category}</p>
                </div>
                <Price discountPercentage={discountPercentage} price={price} />
                <div className="bottom">
                    <button
                        onClick={() => {
                            update(),
                                addPopup(
                                    cart[id] ? (
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
                                    cart[id] && "var(--red-color)"
                                );
                        }}
                    >
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
