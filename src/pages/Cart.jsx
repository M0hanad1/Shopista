import SectionTitle from "../components/global/SectionTitle";
import ProductsCart from "../components/ProductsList/ProductsCart";

export default function Cart() {
    return (
        <ProductsCart>
            <SectionTitle name="Cart" description="Browse your cart products" />
        </ProductsCart>
    );
}
