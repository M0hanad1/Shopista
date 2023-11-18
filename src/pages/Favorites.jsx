import { useContext } from "react";
import ProductsList from "../components/ProductsList/ProductsList";
import { favoritesContext } from "../functions/context";
import Title from "../components/global/Title";

export default function Favorites() {
    const { favorites } = useContext(favoritesContext);

    return (
        <ProductsList result={{ products: favorites }}>
            <Title
                name="Favorites"
                description="Browser all of your favorites"
            />
        </ProductsList>
    );
}
