import { useContext } from "react";
import ProductCart from "../Product/ProductCart";
import "./ProductsCart.css";
import { cartContext } from "../../utils/context";

export default function ProductsCart({ children }) {
    const { cart, setCart } = useContext(cartContext);
    const [cartKeys, cartValues] = [Object.keys(cart), Object.values(cart)];

    return (
        <div className={"products-cart"}>
            {children}
            <div className="container">
                {cartKeys.length === 0 ? (
                    <h3 className="no-products">No products found</h3>
                ) : (
                    <>
                        {cartValues.map((data) => (
                            <ProductCart key={data.id} {...data} />
                        ))}
                        <div className="total">
                            <div className="items">
                                <p>
                                    Items:{" "}
                                    <span className="important">
                                        {cartKeys.length}
                                    </span>
                                </p>
                            </div>
                            <div className="price">
                                <p>
                                    Total (
                                    <span className="important">
                                        {cartValues.reduce(
                                            (previous, current) =>
                                                previous + current.qty,
                                            0
                                        )}
                                    </span>
                                    ):
                                </p>
                                <p>
                                    <span className="dollar">$</span>
                                    {cartValues.reduce(
                                        (previous, current) =>
                                            previous +
                                            current.qty * current.price,
                                        0
                                    )}
                                </p>
                            </div>
                            <button onClick={() => setCart([])}>
                                <i className="fa-solid fa-trash-can"></i> Clear
                                All
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
