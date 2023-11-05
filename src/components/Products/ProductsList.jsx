import Product from "./Product";
import "./ProductsList.css";

export default function ProductsList({ updater, children }) {
    const { products, limit, setLimit } = updater();

    return (
        <div className="products" id="products">
            {children}
            <div className="container">
                {Object.keys(products).length === 0 ? (
                    <h3 className="no-products">No products found</h3>
                ) : (
                    Object.values(products).map(
                        (data, index) =>
                            ![2, 29].includes(data.id) && (
                                <Product key={index} {...data} />
                            )
                    )
                )}
                {setLimit && products.length < 100 && (
                    <div className="limit">
                        <button onClick={() => setLimit(limit + 30)}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
