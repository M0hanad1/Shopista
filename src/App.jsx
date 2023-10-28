import Header from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";
import { useState } from "react";
import {
    cartContext,
    favoritesContext,
    getCart,
    getFavorites,
} from "./Context";

export default function App() {
    const [cart, setCart] = useState(getCart);
    const [favorites, setFavorites] = useState(getFavorites);

    return (
        <cartContext.Provider value={{ cart, setCart }}>
            <favoritesContext.Provider value={{ favorites, setFavorites }}>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="/*" element={<Navigate replace to="404" />} />
                </Routes>
            </favoritesContext.Provider>
        </cartContext.Provider>
    );
}
