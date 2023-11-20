import { useState } from "react";
import { getData } from "../utils/localStorage";
import { cartContext, favoritesContext } from "./context";

export default function ContextProvider({ children }) {
    const [favorites, setFavorites] = useState(getData("favorites", {}));
    const [cart, setCart] = useState(getData("cart", {}));

    return (
        <cartContext.Provider value={{ cart, setCart }}>
            <favoritesContext.Provider value={{ favorites, setFavorites }}>
                {children}
            </favoritesContext.Provider>
        </cartContext.Provider>
    );
}
