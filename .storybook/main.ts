import type { StorybookConfig } from "@storybook-astro/framework";
import { react } from "@storybook-astro/framework/integrations";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook-astro/framework",
    options: {
      integrations: [react({ include: ["**/*.tsx", "**/*.jsx"] })],
    },
  },
};

export default config;
