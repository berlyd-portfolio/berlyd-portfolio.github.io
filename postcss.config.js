const tailwind = require("tailwindcss");
const cssnano = require("cssnano");
const presetEnv = require("postcss-preset-env")({
  features: {
    // enable nesting
    "nesting-rules": true,
  },
});
const autoPrefixer = require("autoprefixer");
const autoprefixer = require("autoprefixer");

const plugins =
  process.env.NODE_ENV === "production"
    ? [tailwind, presetEnv, autoPrefixer, cssnano]
    : [tailwind, presetEnv, autoprefixer];

module.exports = { plugins };
