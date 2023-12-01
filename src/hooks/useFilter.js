import { useSearchParams } from "react-router-dom";

function sortProducts(products, sortBy) {
    switch (sortBy) {
        case "rating":
            return products.toSorted((a, b) => +b.rating - +a.rating);

        case "rating_low":
            return products.toSorted((a, b) => +a.rating - +b.rating);

        case "price":
            return products.toSorted((a, b) => +a.price - +b.price);

        case "price_high":
            return products.toSorted((a, b) => +b.price - +a.price);

        default:
            return products;
    }
}

export default function useFilter(products) {
    const [filterParams] = useSearchParams();
    const category = filterParams.get("category")?.toLowerCase();
    const brand = filterParams.get("brand")?.toLowerCase();
    const sortBy = filterParams.get("sort")?.toLowerCase();

    if (category) {
        products = products.filter(
            (p) => p.category.toLowerCase() === category
        );
    }
    if (brand) {
        products = products.filter((p) => p.brand.toLowerCase() === brand);
    }

    return sortProducts(products, sortBy);
}
