"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const productsData_1 = __importDefault(require("./productsData"));
const react_router_dom_1 = require("react-router-dom");
const ProductDetail = () => {
    const { productId } = (0, react_router_dom_1.useParams)();
    const product = productsData_1.default.find(product => product.id === Number(productId));
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, product === null || product === void 0 ? void 0 : product.name),
        react_1.default.createElement("h3", null,
            "Price: $", product === null || product === void 0 ? void 0 :
            product.price,
            ".00"),
        react_1.default.createElement("p", null,
            "Description: ", product === null || product === void 0 ? void 0 :
            product.description)));
};
exports.default = ProductDetail;
//# sourceMappingURL=ProductDetail.js.map