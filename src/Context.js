import { createContext } from "react";

function getData(mode) {
    if (!localStorage.getItem(mode)) {
        localStorage.setItem(mode, "{}");
    }
    return JSON.parse(localStorage.getItem(mode));
}

export const cartContext = createContext({
    cart: [],
    setCart: () => {},
});

export function getCart() {
    return getData("cart");
}

export const favoritesContext = createContext({
    favorites: [],
    setFavorites: () => {},
});

export function getFavorites() {
    return getData("favorites");
}
