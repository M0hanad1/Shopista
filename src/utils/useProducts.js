import { useEffect, useRef, useState } from "react";
import fetchProducts from "./fetchProducts";

export default function useProducts(search = "") {
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const searchRef = useRef();

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            // reset content when a new search happens
            if (searchRef.current !== search) {
                setSkip(0);
                setTotal(0);
                setProducts([]);
                searchRef.current = search;
            }
            const data = await fetchProducts(
                `https://dummyjson.com/products/search?q=${search}&skip=${skip}`
            );
            setProducts((oldProducts) => [...oldProducts, ...data.products]);
            setTotal(data.total - data.products.length);
            setIsLoading(false);
        }
        // not loading if user didn't provide ?q searchParam (just went to /search)
        search !== null && fetchData();
    }, [search, skip]);

    return { products, total, isLoading, skip, setSkip };
}
