export default async function fetchProducts(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
            if (response.status === 404) return;
            throw new Error(data.message || "Something went wrong");
        }
        return data;
    } catch (error) {
        console.error("API Error", error.message);
        throw error;
    }
}
