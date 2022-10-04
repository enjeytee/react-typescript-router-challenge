"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const productsData_1 = __importDefault(require("./productsData"));
const react_router_dom_1 = require("react-router-dom");
const Products = () => {
    const products = productsData_1.default.map(product => (react_1.default.createElement("div", { key: product.id },
        react_1.default.createElement("h3", null,
            react_1.default.createElement(react_router_dom_1.Link, { to: `/products/${product.id}` }, product.name)),
        react_1.default.createElement("p", null,
            "Price: $",
            product.price,
            ".00"),
        react_1.default.createElement("hr", null))));
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Products Page"),
        products));
};
exports.default = Products;
//# sourceMappingURL=Products.js.map