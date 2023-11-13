import { useContext } from "react";
import ProductCart from "../Product/ProductCart";
import "./ProductsCart.css";
import { cartContext } from "../../Context";

export default function ProductsCart({ children }) {
    const { cart, setCart } = useContext(cartContext);
    console.log(cart);

    return (
        <div className={"products-cart"}>
            {children}
            <div className="container">
                {Object.keys(cart).length === 0 ? (
                    <h3 className="no-products">No products found</h3>
                ) : (
                    <>
                        {Object.values(cart).map((data) => (
                            <ProductCart key={data.id} {...data} />
                        ))}
                        {/* TODO: MAKE PRICE IT'S OWN DIV INSIDE THE TOTAL DIV */}
                        <div className="total">
                            Total (
                            <span className="important">
                                {Object.values(cart).reduce(
                                    (previous, current) =>
                                        previous + current.qty,
                                    0
                                )}
                            </span>
                            ) :
                            <p>
                                <span className="dollar">$</span>
                                {Object.values(cart).reduce(
                                    (previous, current) =>
                                        previous + current.qty * current.price,
                                    0
                                )}
                            </p>
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
