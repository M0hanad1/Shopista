import { useState } from "react";
import Loader from "./Loader";

export default function ImageLoader({ src, alt = "" }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {!isLoaded && <Loader />}
            <img
                style={{ display: !isLoaded && "none" }}
                src={src}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
                onError={() => setIsLoaded(true)}
            />
        </>
    );
}
