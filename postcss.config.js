/** @type {import("postcss/lib/postcss").Postcss} */
const postcssConfig = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    "postcss-nested",
  ],
};

module.exports = postcssConfig;
