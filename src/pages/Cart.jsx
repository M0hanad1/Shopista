import Title from "../components/global/Title";
import ProductsCart from "../components/ProductsList/ProductsCart";

export default function Cart() {
    return (
        <ProductsCart>
            <Title name="Cart" description="Browse your cart products" />
        </ProductsCart>
    );
}
