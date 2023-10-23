import Header from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="/*" element={<Navigate replace to="404" />} />
            </Routes>
        </>
    );
}
