import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ScrollTop from "./components/ScrollTop";

import "./styles/global.css";

ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>

        <BrowserRouter>

            <ScrollTop />

            <App />

        </BrowserRouter>

    </React.StrictMode>

);