import "./ProductsCart.css";
import Total from "./Total";
import ProductCart from "../../Product/ProductCart";
import NoProducts from "../NoProducts";
import useCart from "../../../../hooks/useCart";

export default function ProductsCart({ children }) {
    const { cart } = useCart();

    return (
        <div className={"products-cart"}>
            {children}
            <div className="container">
                {!cart.length ? (
                    <NoProducts />
                ) : (
                    <>
                        {cart.map((data) => (
                            <ProductCart key={data.id} {...data} />
                        ))}
                        <Total />
                    </>
                )}
            </div>
        </div>
    );
}
