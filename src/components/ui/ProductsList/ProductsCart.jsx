import { useContext } from "react";
import ProductCart from "../Product/ProductCart";
import "./ProductsCart.css";
import { cartContext } from "../../../context/context";
import Total from "./Total";

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
                        <Total cart={cart} setCart={setCart} />
                    </>
                )}
            </div>
        </div>
    );
}
