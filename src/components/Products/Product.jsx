import "./Product.css";

export default function Product({
    thumbnail,
    title,
    rating,
    description,
    category,
    price,
    discountPercentage,
}) {
    return (
        <div className="product">
            <img src={thumbnail} />
            <div className="data">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="info">
                    <p>{category}</p>
                    <span>
                        <i className="fa-solid fa-star"></i>
                        {parseFloat(rating).toFixed(2)}
                    </span>
                </div>
                <div className="price">
                    <p>
                        <span className="dollar">$</span>
                        {price}
                    </p>
                    <div>
                        List:{" "}
                        <p className="old">
                            <span className="dollar">$</span>
                            {(
                                (price / (100 - discountPercentage)) *
                                100
                            ).toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
