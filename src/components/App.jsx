import React from "react";
import AppRoutes from "./AppRoutes";
import { Helmet } from "react-helmet";

const App = () => (
    <div className="container">
        <Helmet><meta name="robots" content="noindex"/></Helmet>
        <AppRoutes />
    </div>
);
export default App;
