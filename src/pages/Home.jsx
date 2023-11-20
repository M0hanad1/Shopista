import Landing from "../components/ui/Landing/Landing";
import ProductsList from "../components/ui/ProductsList/ProductsList";
import SectionTitle from "../components/SectionTitle";
import useProducts from "../utils/useProducts";

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
