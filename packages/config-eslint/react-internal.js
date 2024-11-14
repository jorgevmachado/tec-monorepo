const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    allowString : 0,
    allowNumber : 0,
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    'sort-imports': ['error', {
      'ignoreCase': false,
      'ignoreMemberSort': false,
      'allowSeparatedGroups': true,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
      'ignoreDeclarationSort': false,
    }],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'named': 'never',
      'anonymous': 'always',
      'asyncArrow': 'always'
    }],
    'turbo/no-undeclared-env-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  extends: ["eslint:recommended", "prettier", "turbo"],
  plugins: ["only-warn"],
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ["*.js?(x)", "*.ts?(x)"] },
  ],
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    ".*.cjs",
    "node_modules/",
    "dist/",
  ],
};
