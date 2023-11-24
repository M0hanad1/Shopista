import { useContext } from "react";
import "./ProductsCart.css";
import Total from "./Total";
import { cartContext } from "../../../../context/context";
import ProductCart from "../../Product/ProductCart";
import NoProducts from "../NoProducts";

export default function ProductsCart({ children }) {
    const { cart, setCart } = useContext(cartContext);
    return (
        <div className={"products-cart"}>
            {children}
            <div className="container">
                {!Object.keys(cart).length ? (
                    <NoProducts />
                ) : (
                    <>
                        {Object.values(cart).map((data) => (
                            <ProductCart key={data.id} {...data} />
                        ))}
                        <Total cart={cart} setCart={setCart} />
                    </>
                )}
            </div>
        </div>
    );
}
