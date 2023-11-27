import { useContext, useState } from "react";
import Loader from "../../../../Loaders/Loader";
import Price from "../../Price";
import "./ProductData.css";
import { cartContext } from "../../../../../context/context";
import { setData } from "../../../../../utils/localStorage";
import usePopups from "../../../../../hooks/usePopups";

export default function ProductData({ product, titleComponent }) {
    const { cart, setCart } = useContext(cartContext);
    const { addPopup } = usePopups();
    const [qtyInput, setQtyInput] = useState(1);
    const qty = cart[product.id]?.qty || 0;

    function update(value) {
        let final = { ...cart };
        final[product.id] = { ...product, qty: value };
        setData("cart", final);
        setCart(final);
        setQtyInput(1);
    }

    function check(event) {
        const targetValue = +event.target.value;
        const value = targetValue + qty;
        if (product.stock < value || !targetValue) {
            event.target.value = qtyInput;
            return;
        }
        setQtyInput(targetValue);
    }

    return (
        <div className="product-data">
            {!Object.keys(product).length ? (
                <Loader />
            ) : (
                <>
                    {titleComponent}
                    <div className="info">
                        <div className="rating">
                            <i className="fa-solid fa-star"></i>{" "}
                            {product.rating}
                        </div>
                        <span className="sep"></span>
                        <div className="stock">
                            <span>
                                {product.stock > 10 ? "+10" : product.stock}
                            </span>{" "}
                            in stock
                        </div>
                    </div>
                    <Price {...product} />
                    <div className="actions">
                        {qty === product.stock ? (
                            <p>
                                <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                                You have all the stocks in your Cart
                            </p>
                        ) : (
                            <div className="inputs">
                                <button
                                    onClick={() => setQtyInput(qtyInput + 1)}
                                    disabled={qtyInput + qty >= product.stock}
                                >
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                                <input
                                    min={1}
                                    max={product.stock}
                                    type="number"
                                    name="qty"
                                    value={qtyInput}
                                    onInput={check}
                                />
                                <button
                                    onClick={() => setQtyInput(qtyInput - 1)}
                                    disabled={qtyInput === 1}
                                >
                                    <i className="fa-solid fa-minus"></i>
                                </button>
                            </div>
                        )}
                        <button
                            onClick={() => {
                                update(qty + qtyInput),
                                    addPopup(
                                        <>
                                            <i className="fa-solid fa-cart-plus"></i>
                                            Product added to the Cart
                                        </>
                                    );
                            }}
                            style={{
                                display:
                                    qty === product.stock ? "none" : "flex",
                            }}
                        >
                            <i className="fa-solid fa-cart-plus"></i>Add to cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
