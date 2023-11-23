import ProductData from "./ProductData";
import ProductImages from "./ProductImages";
import "./ProductView.css";

export default function ProductView(props) {
    return (
        <div className="product-view">
            <div className="container">
                <ProductImages {...props} />
                <ProductData {...props} />
            </div>
        </div>
    );
}
