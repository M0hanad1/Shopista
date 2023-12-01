import useCart from "../../../../../hooks/useCart";
import usePopups from "../../../../../hooks/usePopups";
import "./Total.css";

export default function Total() {
    const { cart, clearCart, getCartTotal } = useCart();
    const { items, price } = getCartTotal();
    const { addPopup } = usePopups();

    return (
        <div className="total">
            <div className="items">
                <p>
                    Items: <span className="important">{cart.length}</span>
                </p>
            </div>
            <div className="price">
                <p>
                    Total (<span className="important">{items}</span>
                    ):
                </p>
                <p>
                    <span className="dollar">$</span>
                    {price}
                </p>
            </div>
            <button
                onClick={() => {
                    clearCart(),
                        addPopup(
                            <>
                                <i className="fa-solid fa-trash-can"></i> All
                                products removed from the Cart
                            </>,
                            "var(--red-color)"
                        );
                }}
            >
                <i className="fa-solid fa-trash-can"></i> Clear All
            </button>
        </div>
    );
}
