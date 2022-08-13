/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
// module.exports = {

//   extends: [
//     "eslint:recommended",
//     "plugin:vue/vue3-essential",
//     "plugin:@typescript-eslint/recommended",
//   ],
//   parserOptions: {
//     ecmaVersion: "latest",
//     parser: "@typescript-eslint/parser",
//     sourceType: "module",
//   },
//   plugins: ["vue", "@typescript-eslint"],
//   rules: {},
// };
