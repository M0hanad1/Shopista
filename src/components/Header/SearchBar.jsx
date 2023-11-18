import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar() {
    const navigate = useNavigate();
    return (
        <form
            className="search"
            onSubmit={(e) => {
                e.preventDefault();
                navigate(`/search?q=${e.target.search.value}`);
            }}
        >
            <input required name="search" type="text" placeholder="Search" />
            <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    );
}
