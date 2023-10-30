import "./Title.css";

export default function Title({ name, description }) {
    return (
        <div className="title important">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}
