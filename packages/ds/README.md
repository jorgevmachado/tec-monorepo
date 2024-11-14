# `Design System`

Powered by

![Typescript](https://img.shields.io/badge/typescript-%23323330.svg?style=falt&logo=typescript&logoColor=%233178C6)
![React](https://img.shields.io/badge/react-2C8EBB.svg?style=falt&logo=react&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=falt&logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/jest-C53d15.svg?style=falt&logo=jest&logoColor=white)

## What is it for?

Design System React component library


> ex: button ...

```
├── src
│   ├── [module]
│   |   ├── index.ts
│   |   ├── [submodules]
|   |   |   ├── index.ts
```
ex:
```
├── src
│   ├── components
│   |   ├── button
│   |   |   ├── index.ts
│   |   |   ├── Button.tsx
│   |   |   ├── Button.scss
│   |   ├── index.ts
```

## How to use?

To use a ds within the project, just import the ds lib and navigate to the desired value

```typescript
import Button from '@tec/ds/button';
// or
import { Button } from '@tec/ds';
```

## 🏠 Build

```sh
make build-ds
```

## 🔥 Hot reload

```sh
make watch-ds
```

## 🧪 Test

```sh
make test-ds
```