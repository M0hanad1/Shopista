import { setData } from "../../utils/localStorage";
import "./Total.css";

export default function Total({ cart, setCart }) {
    const [cartKeys, cartValues] = [Object.keys(cart), Object.values(cart)];

    function clear() {
        setCart([]);
        setData("cart", {});
    }

    return (
        <div className="total">
            <div className="items">
                <p>
                    Items: <span className="important">{cartKeys.length}</span>
                </p>
            </div>
            <div className="price">
                <p>
                    Total (
                    <span className="important">
                        {cartValues.reduce(
                            (previous, current) => previous + current.qty,
                            0
                        )}
                    </span>
                    ):
                </p>
                <p>
                    <span className="dollar">$</span>
                    {cartValues.reduce(
                        (previous, current) =>
                            previous + current.qty * current.price,
                        0
                    )}
                </p>
            </div>
            <button onClick={clear}>
                <i className="fa-solid fa-trash-can"></i> Clear All
            </button>
        </div>
    );
}
