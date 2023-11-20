import { createContext } from "react";

const cartContext = createContext({
    cart: {},
    setCart: () => {},
});

const favoritesContext = createContext({
    favorites: {},
    setFavorites: () => {},
});

export { cartContext, favoritesContext };
