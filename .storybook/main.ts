import type { StorybookConfig } from "@storybook/react-webpack5";
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-react-native-web",
      options: {
        modulesToTranspile: ["react-native-reanimated"],
        babelPlugins: [
          "@babel/plugin-proposal-export-namespace-from",
          "react-native-reanimated/plugin",
        ],
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    if (config.plugins) {
      config.plugins.push(new NodePolyfillPlugin());
    }
    return config;
  },
};
export default config;
