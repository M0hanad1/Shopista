import ProductHome from "../Product/ProductHome";
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
                        (data) =>
                            ![2, 29].includes(data.id) && (
                                <ProductHome key={data.id} {...data} />
                            )
                    )
                )}
                {setLimit && (
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
