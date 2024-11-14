# `tokens with style-dictionary`

Powered by

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=falt&logo=node.js&logoColor=white)

## What is it for?

tokens responsible for transforming and formatting Design Tokens for our brands.


> ex: geek ...

```
├── src
│   ├── [module]
│   |   ├── base.json
│   |   ├── [submodules]
|   |   |   ├── index.ts
```
ex:
```
├── src
│   ├── brand
│   |   ├── geek
│   |   |   ├── color.json
│   ├── globals
│   |   ├── color.json
│   |   ├── size.json
```

## How to use?

To use a token within the project, just import the lib and navigate to the desired value

## 🏠 Build

```sh
make build-tokens
```