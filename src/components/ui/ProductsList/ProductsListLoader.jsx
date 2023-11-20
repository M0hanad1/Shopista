import Loader from "../../Loader";
import "./ProductsListLoader.css";

export default function ProductsListLoader({ container, productsLength }) {
    let rows = 1;
    let columns = 4;
    if (container) {
        rows = window
            .getComputedStyle(container)
            .getPropertyValue("grid-template-rows")
            .split(" ").length;
        columns = window
            .getComputedStyle(container)
            .getPropertyValue("grid-template-columns")
            .split(" ").length;
    }
    let result = productsLength ? rows * columns - productsLength : 0;

    return (
        <div
            className="loaders"
            style={{ gridColumnEnd: `${!result ? columns : result} span` }}
        >
            <Loader />
            <Loader />
            <Loader />
            <Loader />
        </div>
    );
}
