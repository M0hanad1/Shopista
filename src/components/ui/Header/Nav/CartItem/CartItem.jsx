import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../../../../context/context";
import "./cartItem.css";

export default function CartItem() {
    const { cart } = useContext(cartContext);
    const items = Object.values(cart).reduce(
        (previous, current) => previous + current.qty,
        0
    );

    return (
        <Link to="/cart" className="cart-item circle-hover" data="Cart">
            <i className="fa-solid fa-cart-shopping">
                <span style={{ display: items ? "flex" : "none" }}>
                    {items > 9 ? "+9" : items}
                </span>
            </i>
        </Link>
    );
}
