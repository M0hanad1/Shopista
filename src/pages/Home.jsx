import { useEffect, useState } from "react";
import Landing from "../components/Landing/Landing";
import ProductsHome from "../components/ProductsList/ProductsHome";
import Title from "../components/global/Title";

function useHome() {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(0);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch(`https://dummyjson.com/products?skip=${limit}`, {
            signal: signal,
        })
            .then((res) => res.json())
            .then((data) =>
                setProducts((oldProducts) => [...oldProducts, ...data.products])
            )
            .catch((err) => {
                if (err.name === "AbortError") return;
                else throw err;
            });
        return () => controller.abort();
    }, [limit]);

    return { products, limit, setLimit };
}

export default function Home() {
    return (
        <>
            <Landing />
            <ProductsHome updater={useHome}>
                <Title
                    name="Products"
                    description="Browser all of our products"
                />
            </ProductsHome>
        </>
    );
}
