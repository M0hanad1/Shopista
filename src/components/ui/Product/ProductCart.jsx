import { useContext, useState } from "react";
import Thumbnail from "../../Thumbnail";
import "./ProductCart.css";
import { Link } from "react-router-dom";
import { cartContext } from "../../../context/context";
import { setData } from "../../../utils/localStorage";

export default function ProductCart(props) {
    const { cart, setCart } = useContext(cartContext);
    const { id, title, price, stock } = props;
    const [qty, setQty] = useState(props.qty);

    function update(value) {
        let final = { ...cart };
        if (value) {
            final[id] = { ...props, qty: value };
            setQty(value);
        } else delete final[id];
        setData("cart", final);
        setCart(final);
    }

    function check(event) {
        try {
            const value = +event.target.value;
            if (stock < value) {
                throw Error;
            }
            update(value);
        } catch {
            event.target.value = qty;
        }
    }

    return (
        <div className="product-cart">
            <div className="left">
                <Thumbnail {...props} />
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
                <Link to={`/product/${id}`}>{title}</Link>
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
                <button onClick={() => update()}>
                    <i className="fa-solid fa-trash"></i> Delete
                </button>
            </div>
        </div>
    );
}