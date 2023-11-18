import { Navigate, useSearchParams } from "react-router-dom";
import ProductsList from "../components/ProductsList/ProductsList";
import Title from "../components/global/Title";
import useProducts from "../utils/useProducts";

export default function Search() {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("q");
    const result = useProducts(name);

    return name ? (
        <ProductsList result={result}>
            <Title name="Search" description="All you searched for" />
        </ProductsList>
    ) : (
        <Navigate to="/" replace />
    );
}
