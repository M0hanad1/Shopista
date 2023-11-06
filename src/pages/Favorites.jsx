import { useContext } from "react";
import ProductsHome from "../components/ProductsList/ProductsHome";
import { favoritesContext } from "../Context";
import Title from "../components/global/Title";

function useFavorites() {
    const { favorites } = useContext(favoritesContext);
    return { products: favorites };
}

export default function Favorites() {
    return (
        <ProductsHome updater={useFavorites}>
            <Title
                name="Favorites"
                description="Browser all of your favorites"
            />
        </ProductsHome>
    );
}
