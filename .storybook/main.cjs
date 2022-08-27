const path = require('path');
const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
  stories: [
    "../src/components/**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-addon-pseudo-states"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config, { configType }) {
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "assets",
            replacement: path.resolve(__dirname, "../src/assets"),
          },
          {
            find: "components",
            replacement: path.resolve(__dirname, "../src/components"),
          },
          {
            find: "styles",
            replacement: path.resolve(__dirname, "../src/styles"),
          },
        ],
      },
    };
  },
}