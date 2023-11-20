import { Navigate, useSearchParams } from "react-router-dom";
import ProductsList from "../components/ui/ProductsList/ProductsList";
import SectionTitle from "../components/SectionTitle";
import useProducts from "../hooks/useProducts";

export default function Search() {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("q");
    const result = useProducts(name);

    return name ? (
        <ProductsList result={result}>
            <SectionTitle name="Search" description="All you searched for" />
        </ProductsList>
    ) : (
        <Navigate to="/" replace />
    );
}
