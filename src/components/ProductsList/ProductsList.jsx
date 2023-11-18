import ProductHome from "../Product/ProductHome";
import Loader from "../global/Loader";
import "./ProductsList.css";

export default function ProductsList({ result, children }) {
    const { products, total, isDone, skip, setSkip } = result;

    return (
        <div
            className={`products ${isDone === false ? "" : "done"}`}
            id="products"
        >
            {children}
            <div className="container">
                {isDone === false ? (
                    <Loader />
                ) : (
                    <>
                        {Object.keys(products).length === 0 ? (
                            <h3 className="no-products">No products found</h3>
                        ) : (
                            Object.values(products).map((data) => (
                                <ProductHome key={data.id} {...data} />
                            ))
                        )}
                    </>
                )}
                {setSkip && skip < total && total > 1 && (
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
