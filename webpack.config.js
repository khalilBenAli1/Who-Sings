const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.devServer = {
    proxy: {
      "/api": {
        target: "https://api.musixmatch.com/ws/1.1",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  };

  return config;
};
