<p>
  <h1 align="center">classed</h1>
</p>

<p align="center">
  <a title="license" href="https://github.com/flamrdevs/classed/blob/main/LICENSE">
    <img title="license" alt="license" src="https://none.deno.dev/npm/l/@classed/preact" hspace="1">
  </a>
  <a title="version" href="https://www.npmjs.com/package/@classed/preact">
    <img title="version" alt="version" src="https://none.deno.dev/npm/v/@classed/preact" hspace="1">
  </a>
  <a title="size" href="https://bundlejs.com/?q=@classed/preact">
    <img title="size" alt="size" src="https://none.deno.dev/bundlejs/mz/@classed/preact" hspace="1">
  </a>
  <img title="npm monthly downloads" alt="downloads" src="https://none.deno.dev/npm/dm/@classed/preact" hspace="1">
</p>

# @classed/preact

## Introduction

Classed components for Preact.

## Installation

```sh
npm install @classed/preact
# or
yarn add @classed/preact
# or
pnpm add @classed/preact
# or
bun add @classed/preact
```

## Examples

### basic

with [classed utils cx](https://www.npmjs.com/package/@classed/utils)

```tsx
import classed from "@classed/preact";

// components

const Button = classed("button", "btn", "btn-primary", "btn-medium");

// render

<Button class={["extra", "class" /* any cx ClassedClassValue */]}>button</Button>;
```

### custom concatenation

with [clsx](https://www.npmjs.com/package/clsx)

```tsx
import { create } from "@classed/preact";

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
