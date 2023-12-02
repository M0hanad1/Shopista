import ProductHome from "../../Product/ProductHome";
import "./ProductsList.css";
import NoProducts from "../NoProducts";
import { useState } from "react";
import Filters from "./Filters";

export default function ProductsList({ products, children }) {
    const [productsLimit, setProductsLimit] = useState(30);
    const productsLength = products.length;

    return (
        <div className="products" id="products">
            {children}
            <div className="container">
                <Filters />
                <div className="products-container">
                    {!productsLength ? (
                        <NoProducts />
                    ) : (
                        products.map(
                            (data, index) =>
                                index < productsLimit && (
                                    <ProductHome key={data.id} {...data} />
                                )
                        )
                    )}
                    {productsLimit < products.length && (
                        <div className="limit">
                            <button
                                onClick={() =>
                                    setProductsLimit(productsLimit + 30)
                                }
                            >
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
