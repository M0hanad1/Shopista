import { useContext } from "react";
import ProductsList from "../components/ProductsList/ProductsList";
import { cartContext } from "../Context";
import Title from "../components/global/Title";

function useCart() {
    const { cart } = useContext(cartContext);
    return { products: cart };
}

export default function Cart() {
    return (
        <ProductsList updater={useCart} cart>
            <Title name="Cart" description="Browse your cart products" />
        </ProductsList>
    );
}
