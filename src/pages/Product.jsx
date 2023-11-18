import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import fetchProducts from "../utils/fetchProducts";

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetchProducts(`https://dummyjson.com/products/${id}`).then(setProduct);
    }, [id]);
    return (
        <>
            {!product ? (
                <Navigate to="/404" replace />
            ) : (
                <div>
                    <h1>{product.title}</h1>
                </div>
            )}
        </>
    );
}
