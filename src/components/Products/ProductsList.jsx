import { useEffect, useState } from "react";
import Product from "./Product";
import "./ProductsList.css";

export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(0);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?skip=${limit}`)
            .then((res) => res.json())
            .then((data) =>
                setProducts((oldProducts) => [...oldProducts, ...data.products])
            );
    }, [limit]);

    return (
        <div className="products" id="products">
            <div className="container">
                {products.map(
                    (data) =>
                        ![2, 29].includes(data.id) && (
                            <Product key={data.id} {...data} />
                        )
                )}
                {products.length < 100 && (
                    <button onClick={() => setLimit(limit + 30)}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                )}
            </div>
        </div>
    );
}
