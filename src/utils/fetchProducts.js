export default async function fetchProducts(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) return data;
        if (response.status === 404) return; // so we can transfer to 404 page with less errors
        throw new Error(data.message || "Something went wrong");
    } catch (error) {
        console.error("API Error", error.message);
        throw error;
    }
}
