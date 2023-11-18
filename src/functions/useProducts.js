import { useEffect, useRef, useState } from "react";

export default function useProducts(search = "") {
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);
    const [isDone, setIsDone] = useState(false);
    const searchRef = useRef();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchData() {
            // reset content when a new search happens
            if (searchRef.current !== search) {
                setSkip(0);
                setTotal(0);
                setProducts([]);
                setIsDone(false);
                searchRef.current = search;
            }
            try {
                const response = await fetch(
                    `https://dummyjson.com/products/search?q=${search}&skip=${skip}`,
                    { signal: signal }
                );
                const data = await response.json();
                setProducts((oldProducts) => [
                    ...oldProducts,
                    ...data.products,
                ]);
                setTotal(data.total - data.products.length);
                setIsDone(true);
            } catch (error) {
                if (error.name === "AbortError") return;
                else throw error;
            }
        }
        // not loading if user didn't provide ?q searchParam (just went to /search)
        search !== null && fetchData();
        return () => controller.abort();
    }, [search, skip]);

    return { products, total, isDone, skip, setSkip };
}
