import { useState } from "react";
import Price from "@ui/Product/Price";
import "./ProductData.css";
import usePopups from "@hooks/usePopups";
import useCart from "@hooks/useCart";

export default function ProductData({ product, titleComponent }) {
    const { id, stock, rating } = product;
    const { changeQty, getCartProduct } = useCart();
    const { addPopup } = usePopups();
    const [qtyInput, setQtyInput] = useState(1);
    const qty = getCartProduct(id)?.qty || 0;

    function update(value) {
        changeQty(product, value);
        setQtyInput(1);
    }

    function check(event) {
        const targetValue = +event.target.value;
        const value = targetValue + qty;
        if (stock < value || !targetValue) {
            event.target.value = qtyInput;
            return;
        }
        setQtyInput(targetValue);
    }

    return (
        <div className="product-data">
            {titleComponent}
            <div className="info">
                <div className="rating">
                    <i className="fa-solid fa-star"></i> {rating}
                </div>
                <span className="sep"></span>
                <div className="stock">
                    <span>{stock > 10 ? "+10" : stock}</span> in stock
                </div>
            </div>
            <Price {...product} />
            <div className="actions">
                {qty === stock ? (
                    <p>
                        <i className="fa-solid fa-triangle-exclamation"></i> You
                        have all the stocks in your Cart
                    </p>
                ) : (
                    <div className="inputs">
                        <button
                            onClick={() => setQtyInput(qtyInput + 1)}
                            disabled={qtyInput + qty >= stock}
                        >
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        <input
                            min={1}
                            max={stock}
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
                        display: qty === stock ? "none" : "flex",
                    }}
                >
                    <i className="fa-solid fa-cart-plus"></i>Add to cart
                </button>
            </div>
        </div>
    );
}
