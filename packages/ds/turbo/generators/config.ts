import { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('ds-element', {
    description: 'add a new design system element',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the design system element?',
        validate: (input: string) => {
          if (input.includes('.')) {
            return 'file name cannot include an extension';
          }
          if (input.includes(' ')) {
            return 'file name cannot include spaces';
          }
          if (!input) {
            return 'file name is required';
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/elements/{{ kebabCase name }}/{{ pascalCase name }}.tsx',
        templateFile: 'templates/ds.hbs',
      },
      {
        type: 'add',
        path: 'src/elements/{{ kebabCase name }}/{{ pascalCase name }}.stories.tsx',
        templateFile: 'templates/storybook.hbs',
      },
      {
        type: 'add',
        path: 'src/elements/{{ kebabCase name }}/{{ pascalCase name }}.scss',
        templateFile: 'templates/stylesheet.hbs',
      },
      {
        type: 'add',
        path: 'src/elements/{{ kebabCase name }}/index.ts',
        templateFile: 'templates/index.hbs',
      },
      {
        type: 'append',
        path: 'src/elements/index.ts',
        template: 'export * from \'./{{kebabCase name}}\';',
      },
    ],
  });
  plop.setGenerator('ds-component', {
    description: 'add a new design system component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the design system component?',
        validate: (input: string) => {
          if (input.includes('.')) {
            return 'file name cannot include an extension';
          }
          if (input.includes(' ')) {
            return 'file name cannot include spaces';
          }
          if (!input) {
            return 'file name is required';
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{ kebabCase name }}/{{ kebabCase name }}.tsx',
        templateFile: 'templates/ds.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{ kebabCase name }}/{{ kebabCase name }}.stories.tsx',
        templateFile: 'templates/storybook.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
        templateFile: 'templates/stylesheet.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{ kebabCase name }}/index.ts',
        templateFile: 'templates/index.hbs',
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        template: 'export * from \'./{{kebabCase name}}\';',
      },
    ],
  });
}
