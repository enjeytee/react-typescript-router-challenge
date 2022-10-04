import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";

const Products = () => {
    const products = productsData.map(product => (
        <div key={product.id}>
            <h3><Link to={`/products/${product.id}`}>{product.name}</Link></h3>
            <p>Price: ${product.price}.00</p>
            <hr />
        </div>
    ));
    return (
        <div>
            <h1>Products Page</h1>
            {products}
        </div>
    );
};
export default Products;