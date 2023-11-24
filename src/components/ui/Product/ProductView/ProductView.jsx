import { useEffect, useState } from "react";
import ProductData from "./ProductData";
import ProductImages from "./ProductImages";
import "./ProductView.css";
import ProductViewTitle from "./ProductViewTitle";

export default function ProductView(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);
    return (
        <div className="product-view">
            <div className="container">
                {windowWidth <= 767 && <ProductViewTitle {...props} />}
                <ProductImages product={props} windowWidth={windowWidth} />
                <ProductData
                    product={props}
                    titleComponent={
                        windowWidth > 767 && <ProductViewTitle {...props} />
                    }
                />
            </div>
        </div>
    );
}
