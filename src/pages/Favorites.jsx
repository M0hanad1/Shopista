import { useContext, useEffect, useState } from "react";
import ProductsList from "../components/Products/ProductsList";
import { favoritesContext } from "../Context";
import Title from "../components/Title";

function useFavorites() {
    const { favorites } = useContext(favoritesContext);
    const [products, setProducts] = useState([]);
    useEffect(() => setProducts(favorites), [favorites]);
    return { products };
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
