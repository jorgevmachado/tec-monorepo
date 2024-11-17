import type { StorybookConfig } from "@storybook/react-webpack5";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";

const brand = process.env.BRAND || 'geek';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  typescript: {
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
      tsconfigPath: '../tsconfig.json'
    }
  },
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: `
              @import "~@tec/tokens/dist/${brand}/css/_variables.css";
              @import "~@tec/tokens/dist/${brand}/scss/_variables.scss";
            `,
            implementation: require('sass'),
          }
        }
      ]
    });
    return config;
  },
  docs: {
    autodocs: true
  }
};
export default config;
