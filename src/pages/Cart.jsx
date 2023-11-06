import { useContext } from "react";
import ProductsHome from "../components/ProductsList/ProductsHome";
import { cartContext } from "../Context";
import Title from "../components/global/Title";

function useCart() {
    const { cart } = useContext(cartContext);
    return { products: cart };
}

export default function Cart() {
    return (
        <ProductsHome updater={useCart}>
            <Title name="Cart" description="Browse your cart products" />
        </ProductsHome>
    );
}
