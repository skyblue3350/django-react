var path = require("path");
var BundleTracker = require("webpack-bundle-tracker");

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "assets/js/index.tsx"),
    watch: true,
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "assets/bundle/js/"),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader",
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [
        new BundleTracker({filename: "./webpack-stats.json"}),
    ],
}