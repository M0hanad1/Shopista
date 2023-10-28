import { useContext } from "react";
import "./Product.css";
import { cartContext, favoritesContext } from "../../Context";

export default function Product(props) {
    const {
        id,
        thumbnail,
        title,
        rating,
        description,
        category,
        price,
        discountPercentage,
    } = props;
    const { cart, setCart } = useContext(cartContext);
    const { favorites, setFavorites } = useContext(favoritesContext);

    function update(modeName, modeValue) {
        let final = { ...modeValue };
        final[id] ? delete final[id] : (final[id] = props);
        localStorage.setItem(modeName, JSON.stringify(final));
        modeName === "cart" ? setCart(final) : setFavorites(final);
    }

    return (
        <div className="product">
            <img src={thumbnail} />
            <div className="data">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="info">
                    <p>{category}</p>
                </div>
                <div className="price">
                    <p>
                        <span className="dollar">$</span>
                        {parseFloat(price).toFixed(2)}
                    </p>
                    <div className="old">
                        <p>
                            <span className="dollar">$</span>
                            {Math.round(
                                (price / (100 - discountPercentage)) * 100
                            )}
                        </p>
                        <span className="discount">
                            {Math.round(discountPercentage)}% OFF
                        </span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="actions">
                        <button onClick={() => update("cart", cart)}>
                            <i
                                className={`${
                                    cart[id]
                                        ? "fa-solid fa-cart-arrow-down"
                                        : "fa-solid fa-cart-plus"
                                }
                                        cart-action`}
                            ></i>
                        </button>
                        <button onClick={() => update("favorites", favorites)}>
                            <i
                                className={`${
                                    favorites[id] ? "fa-solid" : "fa-regular"
                                } fa-heart favorites-action`}
                            ></i>
                        </button>
                    </div>
                    <span className="rating">
                        <i className="fa-solid fa-star"></i>
                        {parseFloat(rating).toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
}
