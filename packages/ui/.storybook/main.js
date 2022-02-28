module.exports = {
  "stories": [
    "../src/**/*.story.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-interactions'
  ],
  "features": {
    "interactionsDebugger": true
  }
}
