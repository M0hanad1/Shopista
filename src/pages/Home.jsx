import Landing from "../components/ui/Landing/";
import ProductsList from "../components/ui/Products/ProductsList";
import SectionTitle from "../components/SectionTitle";
import useProducts from "../hooks/useProducts";

export default function Home() {
    const result = useProducts();

    return (
        <>
            <Landing />
            <ProductsList result={result}>
                <SectionTitle
                    name="Products"
                    description="Browser all of our products"
                />
            </ProductsList>
        </>
    );
}
