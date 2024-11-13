/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@tec/eslint-config/base.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [".eslintrc.cjs", "*.js", "*.cjs"],
};
