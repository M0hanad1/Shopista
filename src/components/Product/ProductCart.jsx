import { useContext, useState } from "react";
import Thumbnail from "./Thumbnail";
import { cartContext } from "../../Context";
import "./ProductCart.css";

export default function ProductCart(props) {
    const { cart, setCart } = useContext(cartContext);
    const { id, title, price, stock } = props;
    const [qty, setQty] = useState(props.qty);

    function update(value) {
        let final = { ...cart };

        if (value !== undefined) {
            final[id] = { ...props, qty: +value };
            setQty(value);
        } else delete final[id];
        localStorage.setItem("cart", JSON.stringify(final));
        setCart(final);
    }

    function check(event) {
        // TODO: FIX WHEN TRYING TO CLEAR THE INPUT FIELD
        try {
            const value = +event.target.value;
            if (stock < value || value <= 0) {
                throw Error;
            }
            update(event.target.value);
        } catch {
            event.target.value = qty;
        }
    }

    return (
        <div className="product-cart">
            <Thumbnail {...props} />
            <div className="data">
                <h2>{title}</h2>
                <p>{price}</p>
                <p>
                    <span className="important">
                        {stock > 10 ? "+10" : stock}
                    </span>{" "}
                    in Stock
                </p>
                <input
                    min={1}
                    max={stock}
                    type="number"
                    name="qty"
                    value={qty}
                    onInput={check}
                />
                <button onClick={() => update()}>Delete</button>
            </div>
        </div>
    );
}
