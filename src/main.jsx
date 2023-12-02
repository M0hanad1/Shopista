import ReactDOM from "react-dom/client";
import App from "App.jsx";
import { HashRouter } from "react-router-dom";
import "assets/normalize.css";
import "assets/fontawesome.min.css";
import "assets/solid.min.css";
import "assets/regular.min.css";
import "assets/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
        <App />
    </HashRouter>
);
