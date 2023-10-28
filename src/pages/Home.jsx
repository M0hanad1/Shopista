import { useEffect, useState } from "react";
import Landing from "../components/Landing/Landing";
import ProductsList from "../components/Products/ProductsList";
import Title from "../components/Title";

function useHome() {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(0);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?skip=${limit}`)
            .then((res) => res.json())
            .then((data) =>
                setProducts((oldProducts) => [...oldProducts, ...data.products])
            );
    }, [limit]);

    return { products, limit, setLimit };
}

export default function Home() {
    return (
        <>
            <Landing />
            <Title name="Products" description="Browser all of our products" />
            <ProductsList updater={useHome} />
        </>
    );
}
