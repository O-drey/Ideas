module.exports = function (api) {
  api.cache(false);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env",
          // blocklist: null,
          // allowlist: null,
          safe: true,
          // allowUndefined: true,
          // verbose: false,
        },
      ],
    ],
  };
};
