import { useRef } from "react";
import ProductHome from "../../Product/ProductHome";
import ProductsLoader from "./ProductsLoader";
import "./ProductsList.css";
import NoProducts from "../NoProducts";

export default function ProductsList({ result, children }) {
    const { products, total, isLoading, skip, setSkip } = result;
    const productsContainerRef = useRef();
    const productsLength = Object.keys(products).length;

    return (
        <div className="products" id="products">
            {children}
            <div className="container" ref={productsContainerRef}>
                {!isLoading && !productsLength ? (
                    <NoProducts />
                ) : (
                    Object.values(products).map((data) => (
                        <ProductHome key={data.id} {...data} />
                    ))
                )}
                {isLoading && (
                    <ProductsLoader
                        container={productsContainerRef.current}
                        productsLength={productsLength}
                    />
                )}
                {!isLoading && setSkip && skip < total && total > 1 && (
                    <div className="limit">
                        <button onClick={() => setSkip(skip + 30)}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
