import { useContext } from "react";
import "./ProductCart.css";
import { cartContext } from "../../../../context/context";
import { setData } from "../../../../utils/localStorage";
import ProductTitle from "../ProductTitle";
import Thumbnail from "../Thumbnail";
import usePopups from "../../../../hooks/usePopups";

export default function ProductCart(props) {
    const { cart, setCart } = useContext(cartContext);
    const { id, title, price, stock } = props;
    const { addPopup } = usePopups();
    const qty = cart[id].qty;

    function update(value) {
        let final = { ...cart };
        if (value) {
            final[id] = { ...props, qty: value };
        } else delete final[id];
        setData("cart", final);
        setCart(final);
    }

    function check(event) {
        const value = +event.target.value;
        if (stock < value || !value) {
            event.target.value = qty;
            return;
        }
        update(value);
    }

    return (
        <div className="product-cart">
            <div className="left">
                <Thumbnail product={props} />
                <div className="actions">
                    <button
                        onClick={() => update(qty + 1)}
                        disabled={qty === stock}
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                    <input
                        min={1}
                        max={stock}
                        type="number"
                        name="qty"
                        value={qty}
                        onInput={check}
                    />
                    <button
                        onClick={() => update(qty - 1)}
                        disabled={qty === 1}
                    >
                        <i className="fa-solid fa-minus"></i>
                    </button>
                </div>
            </div>
            <div className="data">
                <ProductTitle id={id} title={title} />
                <div className="price">
                    <p>
                        <span className="dollar">$</span>
                        {price * qty}
                    </p>
                    <p className="one">
                        (<span className="dollar">$</span>
                        {price})
                    </p>
                </div>
                <p className="stock">
                    <span className="important">
                        {stock > 10 ? "+10" : stock}
                    </span>{" "}
                    in Stock
                </p>
                <button
                    onClick={() => {
                        update(),
                            addPopup(
                                <>
                                    <i className="fa-solid fa-trash"></i>
                                    Product removed from the cart
                                </>,
                                "var(--red-color)"
                            );
                    }}
                >
                    <i className="fa-solid fa-trash"></i> Delete
                </button>
            </div>
        </div>
    );
}
