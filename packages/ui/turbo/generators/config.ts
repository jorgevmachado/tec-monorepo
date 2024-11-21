import { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('ui', {
    description: 'add a new design system',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the user interface item ?',
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
      {
        type: 'list',
        name: 'type',
        message: 'What type of file should be created ?',
        choices: ['animations', 'layout']
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{ type }}/{{ kebabCase name }}/{{ pascalCase name }}.tsx',
        templateFile: 'templates/ui.hbs',
      },
      {
        type: 'add',
        path: 'src/{{ type }}/{{ kebabCase name }}/{{ pascalCase name }}.stories.tsx',
        templateFile: 'templates/storybook.hbs',
      },
      {
        type: 'add',
        path: 'src/{{ type }}/{{ kebabCase name }}/{{ pascalCase name }}.scss',
        templateFile: 'templates/stylesheet.hbs',
      },
      {
        type: 'add',
        path: 'src/{{ type }}/{{ kebabCase name }}/index.ts',
        templateFile: 'templates/index.hbs',
      },
      {
        type: 'append',
        path: 'src/{{ type }}/index.ts',
        template: 'export { default as {{ pascalCase name }} } from \'./{{kebabCase name}}\';',
      },
    ]
  });
}
