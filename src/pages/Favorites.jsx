import { useContext } from "react";
import ProductsList from "../components/Products/ProductsList";
import { favoritesContext } from "../Context";
import Title from "../components/global/Title";

function useFavorites() {
    const { favorites } = useContext(favoritesContext);
    return { products: favorites };
}

export default function Favorites() {
    return (
        <ProductsList updater={useFavorites}>
            <Title
                name="Favorites"
                description="Browser all of your favorites"
            />
        </ProductsList>
    );
}
