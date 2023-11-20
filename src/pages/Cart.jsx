import SectionTitle from "../components/SectionTitle";
import ProductsCart from "../components/ui/ProductsList/ProductsCart";

export default function Cart() {
    return (
        <ProductsCart>
            <SectionTitle name="Cart" description="Browse your cart products" />
        </ProductsCart>
    );
}
