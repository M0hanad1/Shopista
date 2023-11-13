import { createContext } from "react";

function getData(mode) {
    if (!localStorage.getItem(mode)) {
        localStorage.setItem(mode, "{}");
    }
    return JSON.parse(localStorage.getItem(mode));
}

const cartContext = createContext({
    cart: [],
    setCart: () => {},
});

const favoritesContext = createContext({
    favorites: [],
    setFavorites: () => {},
});

export { cartContext, favoritesContext, getData };
