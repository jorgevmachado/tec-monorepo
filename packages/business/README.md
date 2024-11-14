# `business`

Powered by

![Typescript](https://img.shields.io/badge/typescript-%23323330.svg?style=falt&logo=typescript&logoColor=%233178C6)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=falt&logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/jest-C53d15.svg?style=falt&logo=jest&logoColor=white)

## What is it for?

Business rules aggregator, it is the only application module that must be aware of external services and APIs. The division of its submodules must be based on entities, where each one represents a set of specific rules.


> ex: auth ...

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
│   ├── api
│   |   ├── index.ts
│   ├── auth
│   |   ├── index.ts
│   |   ├── auth.ts
```

## How to use?

To use a business within the project, just import the business lib and navigate to the desired value

```typescript
import { Auth } from '@tec/business/auth';
// or
import { Auth } from '@tec/business';
```

## 🏠 Build

```sh
make build-business
```

## 🔥 Hot reload

```sh
make watch-business
```

## 🧪 Test

```sh
make test-business
```