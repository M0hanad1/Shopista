import "./Search.css";

export default function Search() {
    return (
        <div className="search">
            <input name="search" type="text" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    );
}
