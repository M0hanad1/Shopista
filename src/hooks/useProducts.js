import { useContext } from "react";
import { productsContext } from "../context/context";
import { setData } from "../utils/localStorage";

export default function useProducts() {
    const { products, setProducts } = useContext(productsContext);

    function getProduct(id) {
        return products[id - 1];
    }

    function searchProducts(search = "") {
        search = search?.toLowerCase();
        return products.filter(
            (p) =>
                p.title.toLowerCase().includes(search) ||
                p.description.toLowerCase().includes(search)
        );
    }

    function changeStock(id, stock) {
        let product = getProduct(id);
        product.stock = stock;
        const result = products.map((value) =>
            value.id === product.id ? product : value
        );
        setProducts(result);
        setData("products", result);
    }

    return { products, getProduct, searchProducts, changeStock };
}
