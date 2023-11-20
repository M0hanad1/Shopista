import { useContext } from "react";
import ProductsList from "../components/ui/ProductsList/ProductsList";
import { favoritesContext } from "../context/context";
import SectionTitle from "../components/SectionTitle";

export default function Favorites() {
    const { favorites } = useContext(favoritesContext);

    return (
        <ProductsList result={{ products: favorites }}>
            <SectionTitle
                name="Favorites"
                description="Browser all of your favorites"
            />
        </ProductsList>
    );
}
