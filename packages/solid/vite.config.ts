import { defineConfig } from "vite";

import solid from "vite-plugin-solid";

import dts from "vite-plugin-dts";

import $env from "./../utils/env";

const env = $env();

export default defineConfig({
  build: {
    ...(env.unminify ? { minify: false } : {}),
    target: "esnext",
    lib: {
      entry: ["src/index.tsx"],
      fileName: (format, entry) => `${entry}.${format === "cjs" ? "cjs" : "js"}`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["@classed/utils", "solid-js", "solid-js/web"],
      output: {
        exports: "named",
      },
    },
  },
  plugins: [
    solid(),
    dts({
      include: ["src/**/*.{ts,tsx}"],
      compilerOptions: {
        removeComments: false,
      },
      staticImport: true,
    }),
  ],
});
