import React from "react";
import productsData from "./productsData";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { productId } = useParams();
    const product = productsData.find(product => product.id === Number(productId));
    return (
        <div>
            <h1>{product?.name}</h1>
            <h3>Price: ${product?.price}.00</h3>
            <p>Description: {product?.description}</p>
        </div>
    )
};
export default ProductDetail;