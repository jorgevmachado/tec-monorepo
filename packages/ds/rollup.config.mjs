import { glob } from 'glob';
import path from 'path';

import typescript from "@rollup/plugin-typescript";

import postcss from 'rollup-plugin-postcss';

import sass from 'rollup-plugin-sass';

const stylesheetPlugins = [
    postcss({
        use: [
            ['sass', {
                includePaths: [
                    'node_modules',
                    'src/styles',
                    '@geek/tokens/dist/geek/css/_variables.css',
                    '@geek/tokens/dist/geek/scss/_variables.scss',
                ]
            }]
        ],
        extract: true,
        minimize: true,
        extensions: ['.css', '.scss'],
    }),
    sass({
        insert: true,
        include: ['**/*.scss', '**/*.css'],
        options: {
            includePaths: [
                'node_modules',
                'src/styles'
            ],
        }
    })
];

export default [{
    input: glob.sync('src/**/index.ts'),
    output: {
      dir: path.dirname('dist/index.js'),
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      silenceDeprecations: ['legacy-js-api'],
    },
  }].map((entry) => ({
  ...entry,
  external: ["react/jsx-runtime"],
  plugins: [
      typescript(),
      ...stylesheetPlugins
  ],
}));
