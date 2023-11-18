import Header from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";
import { cartContext, favoritesContext, getData } from "./functions/context";
import { useState } from "react";
import Search from "./pages/Search";

export default function App() {
    const [favorites, setFavorites] = useState(getData("favorites"));
    const [cart, setCart] = useState(getData("cart"));

    return (
        <cartContext.Provider value={{ cart, setCart }}>
            <favoritesContext.Provider value={{ favorites, setFavorites }}>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/*" element={<Navigate replace to="/404" />} />
                </Routes>
            </favoritesContext.Provider>
        </cartContext.Provider>
    );
}
