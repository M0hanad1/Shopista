import Product from "./Product";
import "./ProductsList.css";

export default function ProductsList({ updater }) {
    const { products, limit, setLimit } = updater();

    return products.length === 0 ? (
        <div className="no-products">
            <h3>No products found</h3>
        </div>
    ) : (
        <div className="products" id="products">
            <div className="container">
                {Object.values(products).map(
                    (data, index) =>
                        ![2, 29].includes(data.id) && (
                            <>
                                <Product key={index} {...data} />
                            </>
                        )
                )}
                {setLimit && products.length < 100 && (
                    <button onClick={() => setLimit(limit + 30)}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                )}
            </div>
        </div>
    );
}
