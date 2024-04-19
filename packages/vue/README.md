<p>
  <h1 align="center">classed</h1>
</p>

<p align="center">
  <a title="license" href="https://github.com/flamrdevs/classed/blob/main/LICENSE">
    <img title="license" alt="license" src="https://none.deno.dev/npm/l/@classed/vue" hspace="1">
  </a>
  <a title="version" href="https://www.npmjs.com/package/@classed/vue">
    <img title="version" alt="version" src="https://none.deno.dev/npm/v/@classed/vue" hspace="1">
  </a>
  <a title="size" href="https://bundlejs.com/?q=@classed/vue">
    <img title="size" alt="size" src="https://none.deno.dev/bundlejs/mz/@classed/vue" hspace="1">
  </a>
  <img title="npm monthly downloads" alt="downloads" src="https://none.deno.dev/npm/dm/@classed/vue" hspace="1">
</p>

# @classed/vue

## Introduction

Classed components for Vue.

## Installation

```sh
npm install @classed/vue
# or
yarn add @classed/vue
# or
pnpm add @classed/vue
# or
bun add @classed/vue
```

## Examples

### basic

with [classed utils cx](https://www.npmjs.com/package/@classed/utils)

```tsx
import classed from "@classed/vue";

// components

const Button = classed("button", "btn", "btn-primary", "btn-medium");

// render

<Button class={["extra", "class" /* any cx ClassedClassValue */]}>button</Button>;
```

### custom concatenation

with [clsx](https://www.npmjs.com/package/clsx)

```tsx
import { create } from "@classed/vue";

import clsx from "clsx";

const classed = create({ cx: clsx });

// components

const Button = classed("button", "btn", "btn-primary", "btn-medium");

// render

<Button class={["extra", "class" /* any clsx ClassValue */]}>button</Button>;
```

## Authors

<p>
  <a title="github" href="https://github.com/flamrdevs">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.pages.dev/badge/dark.svg">
      <img alt="github" src="https://flamrdevs.pages.dev/badge/light.svg" hspace="1">
    </picture>
  </a>
</p>

## License

[MIT License](https://github.com/flamrdevs/classed/blob/main/LICENSE)
