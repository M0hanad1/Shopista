import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import fetchProducts from "../utils/fetchProducts";
import Thumbnail from "../components/Thumbnail";
import "./Product.css";
import Loader from "../components/Loader";
import ImageLoader from "../components/ImageLoader";

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProducts(`https://dummyjson.com/products/${id}`).then(setProduct);
    }, [id]);

    if (product === undefined) return <Navigate to="/404" replace />;
    return (
        <div className="product">
            <div className="container">
                <div className="images">
                    {product === null ? (
                        <Loader />
                    ) : (
                        <>
                            <div className="images-holder">
                                {product.images.map((value, index) => (
                                    <ImageLoader src={value} key={index} />
                                ))}
                            </div>
                            <Thumbnail {...product} />
                        </>
                    )}
                </div>
                <div className="data">
                    {product === null ? (
                        <Loader />
                    ) : (
                        <>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
