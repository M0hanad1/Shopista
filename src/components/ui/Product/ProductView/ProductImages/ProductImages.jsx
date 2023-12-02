import Thumbnail from "@ui/Product/Thumbnail";
import "./ProductImages.css";
import { useCallback, useEffect, useRef, useState } from "react";
import ProductImg from "./ProductImg";

export default function ProductImages({ product, isSmallScreen }) {
    if (!product.images?.includes(product.thumbnail)) {
        product.images?.push(product.thumbnail);
    }

    const [active, setActive] = useState(-1);
    const currentThumbnail = product.images?.at(active);
    const swipeRef = useRef();

    const update = useCallback(
        (direction) => {
            if (direction == "swiped-left") {
                return setActive((old) =>
                    old + 1 >= product.images.length ? 0 : old + 1
                );
            }
            setActive((old) =>
                old - 1 <= product.images.length * -1 ? -1 : old - 1
            );
        },
        [product.images?.length]
    );

    useEffect(() => {
        const current = swipeRef.current;
        function handleSwipe(e) {
            update(e.type);
        }
        current?.addEventListener("swiped-left", handleSwipe);
        current?.addEventListener("swiped-right", handleSwipe);
        return () => {
            current?.removeEventListener("swiped-left", handleSwipe);
            current?.removeEventListener("swiped-right", handleSwipe);
        };
    }, [update]);

    return (
        <div className="product-images">
            <div className="holder">
                <ProductImg
                    isSmallScreen={isSmallScreen}
                    currentThumbnail={currentThumbnail}
                    index={-1}
                    value={product.thumbnail}
                    onClick={() => setActive(-1)}
                />
                {product.images.map(
                    (value, index) =>
                        value !== product.thumbnail && (
                            <ProductImg
                                isSmallScreen={isSmallScreen}
                                currentThumbnail={currentThumbnail}
                                index={index}
                                value={value}
                                onClick={() => setActive(index)}
                                key={index}
                            />
                        )
                )}
            </div>
            <Thumbnail
                product={product}
                thumbnailAlt={product.images.at(active)}
                swipeRef={swipeRef}
            />
        </div>
    );
}
