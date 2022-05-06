const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 8082,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "header",
            filename: "remoteEntry.js",
            exposes: { "./Header": "./src/bootstrap" },
            shared: ["faker"],
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
