const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "profile",
        filename: "remoteEntry.js",
        exposes: {
          "./Profile": "./src/components/Profile",
          "./routes": "./src/routes",
        },
        remotes: {
          root: process.env.REMOTE_ROOT,
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 3003,
    progress: false,
  },
};
