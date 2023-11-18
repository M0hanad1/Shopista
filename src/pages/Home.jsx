import Landing from "../components/Landing/Landing";
import ProductsList from "../components/ProductsList/ProductsList";
import Title from "../components/global/Title";
import useProducts from "../utils/useProducts";

export default function Home() {
    const result = useProducts();

    return (
        <>
            <Landing />
            <ProductsList result={result}>
                <Title
                    name="Products"
                    description="Browser all of our products"
                />
            </ProductsList>
        </>
    );
}
