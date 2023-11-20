import { useRef } from "react";
import ProductHome from "../Product/ProductHome";
import ProductsListLoader from "./ProductsListLoader";
import "./ProductsList.css";

export default function ProductsList({ result, children }) {
    const { products, total, isLoading, skip, setSkip } = result;
    const productsContainerRef = useRef();
    const limitRef = useRef();

    return (
        <div className="products" id="products">
            {children}
            <div className="container" ref={productsContainerRef}>
                {!isLoading && Object.keys(products).length === 0 ? (
                    <h3 className="no-products">No products found</h3>
                ) : (
                    Object.values(products).map((data) => (
                        <ProductHome key={data.id} {...data} />
                    ))
                )}
                {isLoading && (
                    <ProductsListLoader
                        container={productsContainerRef.current}
                        productsLength={Object.keys(products).length}
                    />
                )}
                {!isLoading && setSkip && skip < total && total > 1 && (
                    <div className="limit" ref={limitRef}>
                        <button onClick={() => setSkip(skip + 30)}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
