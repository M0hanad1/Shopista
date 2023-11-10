import ProductCart from "../Product/ProductCart";
import ProductHome from "../Product/ProductHome";
import "./ProductsList.css";

export default function ProductsHome({ updater, cart, children }) {
    const { products, limit, setLimit } = updater();

    if (Object.keys(products).length === 0) {
        return (
            <div className={`products${cart ? " cart" : ""}`} id="products">
                {children}
                <div className="container">
                    <h3 className="no-products">No products found</h3>
                </div>
            </div>
        );
    }

    return (
        <div className={`products${cart ? " cart" : ""}`} id="products">
            {children}
            <div className="container">
                {Object.values(products).map(
                    (data, index) =>
                        ![2, 29].includes(data.id) &&
                        (cart ? (
                            <ProductCart key={index} {...data} />
                        ) : (
                            <ProductHome key={index} {...data} />
                        ))
                )}
                {setLimit && (
                    <div className="limit">
                        <button onClick={() => setLimit(limit + 30)}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                )}
                {cart && (
                    <div className="total">
                        Total (
                        <span className="important">
                            {Object.values(products).reduce(
                                (previous, currentValue) => {
                                    return previous + currentValue.qty;
                                },
                                0
                            )}
                        </span>
                        ) :{" "}
                        <p>
                            <span className="dollar">$</span>
                            {Object.values(products).reduce(
                                (previous, currentValue) => {
                                    return (
                                        previous +
                                        currentValue.qty * currentValue.price
                                    );
                                },
                                0
                            )}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
