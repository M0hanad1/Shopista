import { useContext, useState } from "react";
import Loader from "../../../../Loaders/Loader";
import Price from "../../Price";
import "./ProductData.css";
import { cartContext } from "../../../../../context/context";
import { setData } from "../../../../../utils/localStorage";
import Popup from "../../../../Popup";

export default function ProductData(props) {
    const { cart, setCart } = useContext(cartContext);
    const [qtyInput, setQtyInput] = useState(1);
    const qty = cart[props.id]?.qty || 0;

    function update(value) {
        let final = { ...cart };
        final[props.id] = { ...props, qty: value };
        setData("cart", final);
        setCart(final);
        setQtyInput(1);
    }

    function check(event) {
        const targetValue = +event.target.value;
        const value = targetValue + qty;
        if (props.stock < value || !targetValue) {
            event.target.value = qtyInput;
            return;
        }
        setQtyInput(targetValue);
    }

    return (
        <div className="product-data">
            {!Object.keys(props).length ? (
                <Loader />
            ) : (
                <>
                    <div className="title">
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                    <div className="info">
                        <div className="rating">
                            <i className="fa-solid fa-star"></i> {props.rating}
                        </div>
                        <span className="sep"></span>
                        <div className="stock">
                            <span>
                                {props.stock > 10 ? "+10" : props.stock}
                            </span>{" "}
                            in stock
                        </div>
                    </div>
                    <Price {...props} />
                    <div className="actions">
                        {qty === props.stock ? (
                            <p>
                                <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                                You have all the stocks in your Cart
                            </p>
                        ) : (
                            <div className="inputs">
                                <button
                                    onClick={() => setQtyInput(qtyInput + 1)}
                                    disabled={qtyInput + qty >= props.stock}
                                >
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                                <input
                                    min={1}
                                    max={props.stock}
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
                        <Popup
                            trigger={
                                <button
                                    onClick={() => update(qty + qtyInput)}
                                    style={{
                                        display:
                                            qty === props.stock
                                                ? "none"
                                                : "flex",
                                    }}
                                >
                                    <i className="fa-solid fa-cart-plus"></i>Add
                                    to cart
                                </button>
                            }
                        >
                            <i className="fa-solid fa-cart-plus"></i>Product
                            added to the Cart
                        </Popup>
                    </div>
                </>
            )}
        </div>
    );
}
