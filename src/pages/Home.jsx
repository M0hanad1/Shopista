import Landing from "../components/Landing/Landing";
import ProductsList from "../components/ProductsList/ProductsList";
import SectionTitle from "../components/global/SectionTitle";
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
