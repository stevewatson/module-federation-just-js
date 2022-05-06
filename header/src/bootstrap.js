import faker from "faker";

const headerMount = (el) => {
    const headerMarkup = `<h1>The Header Component... (${faker.random.number()})</h1>`;
    el.innerHTML = headerMarkup;
};

if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#dev-header");
    if (el) {
        headerMount(el);
        console.log("==> header is mounting as a development environment!");
    }
}

export { headerMount };
