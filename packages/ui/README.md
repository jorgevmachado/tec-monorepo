# `User Interface`

Powered by

![Typescript](https://img.shields.io/badge/typescript-%23323330.svg?style=falt&logo=typescript&logoColor=%233178C6)
![React](https://img.shields.io/badge/react-2C8EBB.svg?style=falt&logo=react&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=falt&logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/jest-C53d15.svg?style=falt&logo=jest&logoColor=white)

## What is it for?

User Interface React component library


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
│   ├── layouts
│   |   ├── blank
│   |   |   ├── index.ts
│   |   |   ├── Blank.tsx
│   |   |   ├── Blank.scss
│   |   ├── index.ts
```

## How to use?

To use a ui within the project, just import the ds lib and navigate to the desired value

```typescript
import Blank from '@tec/ui/blank';
// or
import { Blank } from '@tec/ui';
```

## 🏠 Build

```sh
make build-ui
```

## 🔥 Hot reload

```sh
make watch-ui
```

## 🧪 Test

```sh
make test-ui
```