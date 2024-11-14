# `services`

Powered by

![Typescript](https://img.shields.io/badge/typescript-%23323330.svg?style=falt&logo=typescript&logoColor=%233178C6)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=falt&logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/jest-C53d15.svg?style=falt&logo=jest&logoColor=white)

## What is it for?

Utility aggregator, set of generic functions that can be used in several different places and has no relation to a business rule.


> ex: http, cookies ...

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
│   ├── http
│   |   ├── index.ts
```

## How to use?

To use a services within the project, just import the service lib and navigate to the desired value

```typescript
import { Http } from '@tec/services/http';
// or
import { Http } from '@tec/services';
```

## 🏠 Build

```sh
make build-services
```

## 🔥 Hot reload

```sh
make watch-services
```

## 🧪 Test

```sh
make test-services
```