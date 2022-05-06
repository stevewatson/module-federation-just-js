import { headerMount } from "header/Header";
import { productMount } from "products/ProductsIndex";

console.log("---== Container ==---");
console.dir(headerMount);
console.dir(productMount);

const el = document.querySelector("#product-list");
productMount(el);

const el2 = document.querySelector("#header-section");
headerMount(el2);
