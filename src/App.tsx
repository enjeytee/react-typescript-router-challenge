import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import ProductDetail from "./ProductDetail.jsx";
import Products from "./Products.jsx";

const App = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productId" element={<ProductDetail />} />
            </Routes>
        </div>
    )
};
export default App;