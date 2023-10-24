import "./Landing.css";

export default function Landing() {
    return (
        <div className="landing">
            <div className="overlay"></div>
            <div className="container">
                <h2>
                    Shop the latest products at{" "}
                    <span className="important">Shopista</span>!
                </h2>
                <p>
                    We have everything you need to look and feel your best, at
                    unbeatable prices.
                </p>
                <a href="#products">Browse Products</a>
            </div>
        </div>
    );
}
