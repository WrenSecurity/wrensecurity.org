module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended"
  ],
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/semi": ["error"],
    "dot-location": ["error", "property"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-trailing-spaces": "error",
    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "off"
  }
};
