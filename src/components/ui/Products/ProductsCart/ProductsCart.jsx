import { useContext } from "react";
import "./ProductsCart.css";
import Total from "./Total";
import { cartContext } from "../../../../context/context";
import ProductCart from "../../Product/ProductCart";

export default function ProductsCart({ children }) {
    const { cart, setCart } = useContext(cartContext);
    const [cartKeys, cartValues] = [Object.keys(cart), Object.values(cart)];

    return (
        <div className={"products-cart"}>
            {children}
            <div className="container">
                {!cartKeys.length ? (
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
