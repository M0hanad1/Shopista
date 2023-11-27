import { createContext } from "react";

const cartContext = createContext({
    cart: {},
    setCart: () => {},
});

const favoritesContext = createContext({
    favorites: {},
    setFavorites: () => {},
});

const popupsContext = createContext({
    popups: { on: true, allPopups: [] },
    setPopups: () => {},
});

export { cartContext, favoritesContext, popupsContext };
