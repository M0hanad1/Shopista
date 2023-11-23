import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import fetchProducts from "../utils/fetchProducts";
import ProductView from "../components/ui/Product/ProductView/";

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetchProducts(`https://dummyjson.com/products/${id}`).then(setProduct);
    }, [id]);

    if (!product) return <Navigate to="/404" replace />;
    return <ProductView {...product} />;
}
