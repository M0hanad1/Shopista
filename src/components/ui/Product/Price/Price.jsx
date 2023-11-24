import "./Price.css";

export default function Price({ price, discountPercentage }) {
    return (
        <div className="price">
            <p>
                <span className="dollar">$</span>
                {price.toFixed(2)}
            </p>
            <div className="old">
                <p>
                    <span className="dollar">$</span>
                    {((price / (100 - discountPercentage)) * 100).toFixed(2)}
                </p>
                <span className="discount">{discountPercentage}% OFF</span>
            </div>
        </div>
    );
}
