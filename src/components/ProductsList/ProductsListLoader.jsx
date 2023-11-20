import "./ProductsListLoader.css";

export default function ProductsListLoader({ container, lastElement }) {
    let rows = 1;
    let columns = 4;
    let children = 0;
    if (container) {
        rows = window
            .getComputedStyle(container)
            .getPropertyValue("grid-template-rows")
            .split(" ").length;
        columns = window
            .getComputedStyle(container)
            .getPropertyValue("grid-template-columns")
            .split(" ").length;
        children = container.children.length;
    }
    let result = rows * columns - children;
    (lastElement || !children) && ++result;

    return (
        <div
            className="loader"
            style={{ gridColumnEnd: `${!result ? columns : result} span` }}
        >
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
        </div>
    );
}
