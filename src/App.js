import React from "react";
import { Router } from "react-router-dom";

import "./config/ReactotronConfig";

import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./routes";

import history from "./services/history";

function App() {
    return (
        <Router history={history}>
            <Routes />
        </Router>
    );
}

export default App;
