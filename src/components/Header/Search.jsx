import { useEffect, useRef, useState } from "react";
import "./Search.css";

export default function Search({ isSmall }) {
    const [search, setSearch] = useState("");
    const searchRef = useRef(null);
    const buttonRef = useRef(null);

    function hideSearch() {
        if (searchRef.current) searchRef.current.classList.remove("show");
    }

    useEffect(() => {
        function handleClick(e) {
            if (
                searchRef.current &&
                e.target !== searchRef.current.firstElementChild &&
                !buttonRef.current.contains(e.target) &&
                searchRef.current.classList.contains("show")
            ) {
                hideSearch();
            }
        }
        document.addEventListener("click", handleClick);
        document.addEventListener("scroll", hideSearch);
        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("scroll", hideSearch);
        };
    }, []);

    return isSmall ? (
        <>
            <button
                className="circle-hover"
                ref={buttonRef}
                onClick={() => searchRef.current.classList.toggle("show")}
            >
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <div className="search small" ref={searchRef}>
                <input
                    name="search"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <i className="fa-solid fa-check"></i>
            </div>
        </>
    ) : (
        <div className="search">
            <input
                name="search"
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    );
}
