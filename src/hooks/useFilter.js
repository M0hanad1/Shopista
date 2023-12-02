import { useSearchParams } from "react-router-dom";

function toLower(array) {
    return array.map((value) => value?.toLowerCase());
}

export default function useFilter(products) {
    const [filterParams] = useSearchParams();
    const categories = toLower(filterParams.getAll("category"));
    const brands = toLower(filterParams.getAll("brand"));
    const sortBy = filterParams.get("sort")?.toLowerCase();

    function sortProducts() {
        switch (sortBy) {
            case "alphabet":
                return products.toSorted((a, b) =>
                    a.title.localeCompare(b.title)
                );

            case "reversed-alphabet":
                return products.toSorted((a, b) =>
                    b.title.localeCompare(a.title)
                );

            case "high-rating":
                return products.toSorted((a, b) => +b.rating - +a.rating);

            case "low-rating":
                return products.toSorted((a, b) => +a.rating - +b.rating);

            case "high-price":
                return products.toSorted((a, b) => +b.price - +a.price);

            case "low-price":
                return products.toSorted((a, b) => +a.price - +b.price);

            default:
                return products;
        }
    }

    if (categories.length) {
        products = products.filter((product) =>
            categories.includes(product.category.toLowerCase())
        );
    }

    if (brands.length) {
        products = products.filter((product) =>
            brands.includes(product.brand.toLowerCase())
        );
    }

    return sortProducts();
}
