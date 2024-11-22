# How to run

## Getting Started

This project is maintained with [yarn](https://yarnpkg.com/) and [MakeFile](https://makefiletutorial.com/), so the development flow is a litte bit different.

## Prerequisites

- `Nodejs`
- `Yarn`

## Installing

```sh
git clone git@github.com:jorgevmachado/tec-monorepo
```

To setup the project, use the command

- NodeJS `^v22.11.0`, see [.nvmrc](./.nvmrc)

This command will install and build all project dependencies

```sh
make setup
```

## Running

After completing the construction of the libraries, simply execute the command for each application to run locally.

configure layout dependencies based on a brand (law, geek or finance)
```sh
    make setup-law
    make setup-geek
    make setup-finance
```

Building a layout dependencies based on a brand (law, geek or finance)
```sh
    make build-finance-dependencies
    make build-geek-dependencies
    make build-finance-dependencies
```

Build the design system project in an assisted manner from a brand (law, geek or finance)
```sh
    make ds-finance-watch
    make ds-geek-watch
    make ds-law-watch
```

Build the user interface project in an assisted manner from a brand (law, geek or finance)
obs: With this command, first it will build its dependency, which in this case is the design system
```sh
    make ui-finance-watch
    make ui-geek-watch
    make ui-law-watch
```

Execute the design system storybook from a brand (law, geek or finance)
```sh
    make ds-finance-storybook
    make ds-geek-storybook
    make ds-law-storybook
```

Execute the user interface storybook from a brand (law, geek or finance)
obs: With this command, first it will build its dependency, which in this case is the design system
```sh
    make ui-finance-storybook
    make ui-geek-storybook
    make ui-law-storybook
```