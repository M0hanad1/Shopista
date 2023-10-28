export default function Title({ name, description }) {
    return (
        <div className="title">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}
