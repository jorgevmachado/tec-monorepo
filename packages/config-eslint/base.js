const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: {
        node: true,
        jest: true,
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
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'turbo',
    ],
    settings: {
        'import/resolver': {
            typescript: {
                project,
            },
        }
    },
    overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
    ignorePatterns: [
        '.*.js',
        'node_modules/',
        'test/',
        'dist/',
    ],
};