import faker from "faker";

const productMount = (el) => {
    let products = "";
    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#dev-products");
    if (el) {
        // this is running in development mode locally
        productMount(el);
        console.log("==> Locally running within development mode");
    }
}

export { productMount };
